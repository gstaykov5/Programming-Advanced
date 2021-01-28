const userModel = firebase.auth();
const DB = firebase.firestore();
const errBox = document.querySelector('#errorBox');
const infoBox = document.querySelector('#infoBox');

const app = Sammy('#main', function () {

    //get
    this.use('Handlebars', 'hbs');

    this.get('/home', function () {
        const userInfo = localStorage.getItem('userInfo');
        this.hasTeam = true;
        if (userInfo) {
            const {
                uid,
                email
            } = JSON.parse(userInfo);
            this.loggedIn = true;
            this.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    });

    this.get('/about', function () {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const {
                uid,
                email
            } = JSON.parse(userInfo);
            this.loggedIn = true;
            this.email = email;
        }
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    });

    this.get('/login', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    });

    this.get('/register', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    });

    this.get('/logout', function () {
        userModel.signOut()
            .then(response => {
                localStorage.removeItem('userInfo');
                this.redirect('/home');
            })
            .catch(err => console.log(err));
    });

    this.get('/catalog', function () {
        this.teams = [];
        const userInfo = localStorage.getItem('userInfo');
        
        DB.collection("teams").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    const {
                        name,
                        comment
                    } = doc.data();

                    const team = {
                        name: name,
                        comment: comment,
                        _id: doc.id
                    }
                    this.teams.push(team)
                    console.log(this.teams);
                });

                if (userInfo) {
                    const { uid, email } = JSON.parse(userInfo);
                    this.loggedIn = true;
                    this.hasNoTeam = !this.teams.length;
                    this.email = email;
                }

                this.loadPartials({
                    'header': './templates/common/header.hbs',
                    'footer': './templates/common/footer.hbs',
                    'teamCatalog': './templates/catalog/teamCatalog.hbs',
                    'team': './templates/catalog/team.hbs'
                }).then(function (ele) {
                    this.partial('./templates/catalog/teamCatalog.hbs');
                })
            });
    });

    this.get('/create-team', function () {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const {
                uid,
                email
            } = JSON.parse(userInfo);
            this.loggedIn = true;
            this.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'createForm': './templates/create/createForm.hbs'
        }).then(function () {
            this.partial('./templates/create/createPage.hbs')
        });
    });

    //post
    this.post('/register', function () {
        const {
            email,
            password,
            repeatPassword
        } = this.params;

        if (password != repeatPassword) {
            errBox.style.display = 'block';
            errBox.textContent = 'The passwords do not match!!!';
            setTimeout(() => {
                errBox.style.display = 'none';
            }, 2000)
            return;
        }
        userModel.createUserWithEmailAndPassword(email, password)
            .then((createdUser) => {
                infoBox.textContent = 'Successful registration';
                infoBox.style.display = 'block';
                this.redirect('/login');
                setTimeout(() => {
                    infoBox.style.display = 'none';
                }, 2000)
            })
            .catch((err) => {
                errBox.textContent = err.message;
                errBox.style.display = 'block';
                setTimeout(() => {
                    errBox.style.display = 'none';
                }, 2000)
            })
    });

    this.post('/login', function () {
        const {
            email,
            password
        } = this.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(loginInfo => {
                const {
                    uid,
                    email
                } = loginInfo.user;
                localStorage.setItem('userInfo', JSON.stringify({
                    uid,
                    email
                }));
                this.redirect('/home');
            })
            .catch(err => {
                errBox.textContent = err.message;
                errBox.style.display = 'block';
                setTimeout(() => {
                    errBox.style.display = 'none';
                }, 2000)
            })
    });

    this.post('/create-team', function () {
        debugger
        this.teams = [];
        const {
            name,
            comment
        } = this.params;

        DB.collection('teams').add({
                name: name,
                comment: comment
            })
            .then(function (docRef) {
                
                console.log(docRef.id);
            })
            .catch(function (error) {
                console.error(error);
            });
    });

});

(() => {
    app.run('/home');
})();
