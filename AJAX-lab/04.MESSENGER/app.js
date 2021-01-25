function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';
    const author = document.querySelector('#author');
    const message = document.querySelector('#content');
    const sendBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    let messageArea = document.querySelector('#messages');

    sendBtn.addEventListener('click', send);
    refreshBtn.addEventListener('click', refresh);

    function send(e) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({author: author.value, content: message.value})
        })
        author.value = '';
        message.value = '';
    }

    function refresh(e) {
        fetch(url)
            .then(response => response.json())
            .then(chat => {
                messageArea.value = Object.values(chat).map(ch => {
                    return `${ch.author}: ${ch.content}\n`
                }).join('').trim();
            })
    }
}

attachEvents();