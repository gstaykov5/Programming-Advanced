function notify(message) {
    const divText = document.querySelector('#notification');
    divText.textContent = message;


    divText.style.display = 'block';
    
    setTimeout(() => {
        divText.style.display = 'none'
    }, 2000)

}