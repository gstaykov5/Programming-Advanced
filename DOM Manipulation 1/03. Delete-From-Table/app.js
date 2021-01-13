function deleteByEmail() {
    const emailLine = document.querySelectorAll('tbody tr');
    const text = document.querySelector('label input').value;

    if(text.length === 0) { return; }

    [...emailLine].forEach(personEmail => {
        const person = personEmail.innerText
        if(!person.includes(text)) { return; }
        personEmail.remove();
        document.querySelector('label input').value = '';
    })
}