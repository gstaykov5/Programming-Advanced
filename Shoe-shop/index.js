const userForm = firebase.auth();
const DB = firebase.firestore();

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    this.get('/home', function (context) {
        this.shoes = [];

        DB.collection("shoes")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((offer) => {
                const id = offer.id;
                const {shoeModel, imgUrl, price} = offer.data();
                this.shoes.push({id, shoeModel, imgUrl, price});

            });
            loadPartialsAndContext(context)
                .then(function () {
                    this.partial('./templates/home.hbs');
                })
        });
    });

    //register/login/logout logic
    this.get('/logout', function () {
        userForm.signOut()
            .then((response) => {
                clearData();
                this.redirect('/home');
            })
    })

    this.get('/login', function (context) {

        loadPartialsAndContext(context)
            .then(function () {
                this.partial('./templates/login.hbs');
            })
    });

    this.get('/register', function (context) {

        loadPartialsAndContext(context)
            .then(function () {
                this.partial('./templates/register.hbs');
            })
    });

    this.post('/register', function () {
        const { email, password } = this.params;
        console.log(this);
        userForm.createUserWithEmailAndPassword(email, password)
            .then(userInfo => {
                this.redirect('/login');
            })
            .catch(err => {console.log(err)})
    })

    this.post('/login', function () {
        const { email, password } = this.params;

        userForm.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                this.redirect('/home');
            })
            .catch((error) => {console.log(error);});
    })

    //offers/details/edit logic
    this.get('/createOffer', function (context) {

        loadPartialsAndContext(context)
            .then(function () {
                this.partial('./templates/createOffer.hbs')
            });
    });

    this.post('createOffer', function (context) {
        const {shoeModel, price, imgUrl, description, brand} = this.params;

        DB.collection('shoes').add({
            shoeModel,
            price,
            imgUrl,
            description,
            brand,
            sellerEmail: getUserData().email
        })
        .then(function(doc) {
            context.redirect('/home')
        })
        .catch(err => {console.log(err);})
    });

    this.get('/details/:id', function (context) {
        const id = context.params.id;

        DB.collection('shoes')
            .doc(id)
            .get()
            .then(response => {
                const actualOfferData = response.data();
                const isSeller = actualOfferData.userEmail === getUserData().email;
                context.offer = {...actualOfferData, isSeller};

            loadPartialsAndContext(context)
            .then(function () {
                    this.partial('./templates/details.hbs');
                });
        })
    });

});

(() => {
    app.run('/home');
})();

function loadPartialsAndContext(context) {

    const user = getUserData();
    context.loggedIn = Boolean(user);
    context.email = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs'
    })
}

function saveUserData(data) {
    const {uid, email} = data.user;
    localStorage.setItem('userName', JSON.stringify({uid, email}));
    return uid;
}

function getUserData() {
    const user = localStorage.getItem('userName');
    return user ? JSON.parse(user) : null
}

function clearData() {
    return localStorage.removeItem('userName');
}
