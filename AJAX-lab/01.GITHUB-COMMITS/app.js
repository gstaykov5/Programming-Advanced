function loadCommits() {
    const userInput = document.querySelector('#username').value;
    const repoInput = document.querySelector('#repo').value;
    const comminUl = document.querySelector('#commits')
    const url = `https://api.github.com/repos/${userInput}/${repoInput}/commits`;

    fetch(url)
        .then(response => response.json())
        .then(userData => {
            comminUl.innerHTML = userData.map(el => `<li>${el.commit.author.name}: ${el.commit.message}`).join('');
        })
        .catch(err => {
            comminUl.innerHTML = `<li>${err.status} ${err.statusText}</li>`
        })
}