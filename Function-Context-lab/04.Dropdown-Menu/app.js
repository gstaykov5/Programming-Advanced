function solve() {
    const dropdownBtn = document.querySelector('#dropdown');
    dropdownBtn.addEventListener('click', showMenu);

    const dropdownUl = document.querySelector('#dropdown-ul');
    dropdownUl.addEventListener('click', coloring);

    const box = document.querySelector('#box');

    function showMenu(e) {
        const styleBtn = document.querySelector('#dropdown-ul');

        if (styleBtn.style.display == 'block') {
            styleBtn.style.display = 'none';
            box.style.background = 'black';
            box.style.color = 'white';
        } else {
            styleBtn.style.display = 'block';
            box.style.background = 'black';
            box.style.color = 'white';
        }
    }

    function coloring(e) {
        const rgb = e.target.textContent;

        box.style.background = rgb;
        box.style.color = 'black';

    }
}