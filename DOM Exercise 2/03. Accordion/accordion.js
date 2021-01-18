function toggle() {
    const text = document.getElementById('extra');
    
    

    if (text.style.display === "none") {
        text.style.display = "block";
        document.querySelector('#accordion .button').innerText = 'LESS';
    } else {
        text.style.display = "none";
        document.querySelector('#accordion .button').innerText = 'MORE';
    }
}