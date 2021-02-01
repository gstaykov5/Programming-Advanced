const errDisplayBox = document.querySelector('.notifications');
const successDisplayBox = errDisplayBox.nextElementSibling;
const successMsg = document.querySelector('#successBox');
const errorMsg = document.querySelector('#errorBox');

const userForm = firebase.auth();
const db = firebase.firestore();


const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', function (context) {
        this.movies = [];
        db.collection("movies")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((movie) => {
                const id = movie.id;
                const {title, imageUrl} = movie.data();
                this.movies.push({id, title, imageUrl});
            });
            loadingPartials(context)
                .then(function () {
                // this.partial('./templates/home.hbs');
                this.partial('./templates/movieList.hbs');
                })
        });
    });
//register, login, logout
    this.get('/register', function (context) {
        loadingPartials(context)
            .then(function () {
                this.partial('./templates/register.hbs')
            })
    });

    this.post('/register', function () {    
        const {email, password, repeatPassword} = this.params;
        if (password != repeatPassword) { return; }
        userForm.createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.redirect('/login');
                successDisplayBox.style.display = 'block';
                successMsg.textContent = 'Successful registration!';
                setTimeout(function () {
                    successDisplayBox.style.display = 'none';
                },2000)
            })
            .catch(error => {
                errDisplayBox.style.display = 'block';
                errorMsg.textContent = `${error}`;
                setTimeout(function () {
                    errDisplayBox.style.display = 'none';
                },2000)
            })
    })

    this.get('/login', function (context) {
        loadingPartials(context)
            .then(function () {
                this.partial('./templates/login.hbs')
            })
    });

    this.post('/login', function () {
        const {email, password} = this.params;
        userForm.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                this.redirect('/home');
                successDisplayBox.style.display = 'block';
                successMsg.textContent = 'Logged in successfuly!';
                setTimeout(function () {
                    successDisplayBox.style.display = 'none';
                },2000)
            })
            .catch((error) => { console.log(error); });
    });

    this.get('/logout', function () {
        userForm.signOut()
            .then((response) => {
                clearUserData()
                this.redirect('/home');
                successDisplayBox.style.display = 'block';
                successMsg.textContent = 'Logged out successfuly!';
                setTimeout(function () {
                    successDisplayBox.style.display = 'none';
                },2000)
            })
    });

//movie list, add movie , details, edit
    // this.get('/movieList', function (context) {
    //     loadingPartials(context)
    //         .then(function () {
    //             this.partial('./templates/movieList.hbs')
    //         })
    // });
    this.get('/addMovie', function (context) {
        loadingPartials(context)
            .then(function () {
                this.partial('./templates/addMovie.hbs')
            })
    });

    this.post('/addMovie', function () {
        const {title, description, imageUrl} = this.params;
        if ((title || description || imageUrl) == '') {
            errDisplayBox.style.display = 'block';
            errorMsg.textContent = 'Invalid inputs!';
            setTimeout(function () {
                errDisplayBox.style.display = 'none';
            },2000);
            return;
        }
        db.collection('movies')
            .add({
                title,
                description,
                imageUrl,
                email: getUserData().email,
                like: 0
            })
            .then(response => {
                this.redirect('/home');
            })
            .catch(error => {console.log(error);})
    });

    this.get('/details/:id', function (context) {
        const id = context.params.id;
        db.collection('movies')
            .doc(id)
            .get()
            .then((response) => {
                const {title, imageUrl, description, email, like} = response.data();
                context.authorization = getUserData().email == email ? true : false;
                context.movieDetails = {title, imageUrl, description, id, like};
            loadingPartials(context)
                .then(function () {
                    this.partial('/templates/details.hbs')
                })
            });
    });
    
    this.get('/delete/:id', function (context) {
        const id = context.params.id;
        db.collection('movies')
            .doc(id)
            .delete()
            .then(function () {
                context.redirect('/home');
            })
            .catch(error => {console.log(error);})
    });

    this.get('/edit/:id', function (context) {
        const id = context.params.id;
        db.collection('movies')
            .doc(id)
            .get()
            .then((response) => {
                const {title, imageUrl, description, email} = response.data();
                context.movieDetails = {title, imageUrl, description, email, id};
            loadingPartials(context)
                .then(function () {
                    this.partial('/templates/edit.hbs')
                })
            })
    });

    this.post('/edit/:id', function () {
        const {title, description, imageUrl, id, like} = this.params;
        if ((title || description || imageUrl) == '') {
            errDisplayBox.style.display = 'block';
            errorMsg.textContent = 'Successfuly edit';
            setTimeout(function () {
                errDisplayBox.style.display = 'none';
            },2000);
            return;
        }
        db.collection('movies')
            .doc(id)
            .set({
                title,
                description,
                imageUrl,
                email: getUserData().email,
                like
            })
            .then(response => {
                this.redirect('/home');
            })
            .catch(error => {console.log(error);})
    });

    this.get('/like/:id', function (context) {
        // does't work correctly yet
        const id = context.params.id;
        db.collection('movies')
            .doc(id)
            .get()
            .then((response) => {
                let {title, imageUrl, description, email, like} = response.data();
                context.movieDetails = {title, imageUrl, description, email, id, like: like++};
            db.collection('movies')
                .doc(id)
                .set({
                    title,
                    imageUrl,
                    description,
                    email,
                    id,
                    like
                })
                .then(function () {
            db.collection('movies')
                .doc(id)
                .get()
                .then((response) => {
                    const {title, imageUrl, description, email, like} = response.data();
                    context.movieDetails = {title, imageUrl, description, email, id, like};})
                })
        
            })
    });

});

(() => {
    app.run('/home');
})();

function loadingPartials(context) {

    const user = getUserData();
    context.loggedIn = Boolean(user);
    context.email = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'home': './templates/home.hbs',
        'footer': './partials/footer.hbs'
    })
}

function saveUserData(data) {
    const {email, uid} = data.user;
    localStorage.setItem('user', JSON.stringify({email, uid}));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData () {
    localStorage.removeItem('user');
}