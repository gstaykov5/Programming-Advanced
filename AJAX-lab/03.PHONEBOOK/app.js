function attachEvents() {
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const ul = document.querySelector('#phonebook');
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');
    const loadUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    btnLoad.addEventListener('click', load);
    btnCreate.addEventListener('click', create);

    function load(e) {
        fetch(loadUrl)
            .then(response => response.json())
            .then(data => {
                ul.textContent = '';
                Object.keys(data).forEach(key => {
                    let li = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    li.textContent = `${data[key].person}: ${data[key].phone}`;
                    li.appendChild(deleteBtn);
                    ul.appendChild(li);

                    deleteBtn.addEventListener('click', () => {del(key)})
                })
            })
    }

    function del(key, asd) {
        const delUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
        fetch(delUrl, {method: 'DELETE'});
    }

    function create(e) {
        fetch(loadUrl, {
            method: 'POST',
            body: JSON.stringify({person: personInput.value, phone: phoneInput.value})
        })
        console.log(this);
        personInput.value = '';
        phoneInput.value = '';
    }
}

attachEvents();