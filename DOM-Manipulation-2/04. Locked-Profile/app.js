function lockedProfile() {
    const main = document.querySelector('#main');
    main.addEventListener('click', onClick);

    function onClick(e) {
        const btnValue = e.target.parentNode.querySelector('button');
        const userDetails = e.target.parentNode.querySelector('div');
        const unlock = e.target.parentNode.querySelector('input[type="radio"][value="unlock"]');
        if (unlock.checked === true) {
            if (e.target === btnValue) {
                if (userDetails.style.display !== 'block') {
                    userDetails.style.display = 'block'
                    btnValue.textContent = 'Hide it';
                } else {
                    userDetails.style.display = 'none';
                    btnValue.textContent = 'Show more';
                }
            }
        }
    }
}