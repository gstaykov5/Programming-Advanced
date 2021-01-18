function solve() {
    const option = document.createElement('option');
    const selectMenu = document.getElementById('selectMenuTo');
    document.querySelector('#selectMenuTo option').value = 'Binary';
    document.querySelector('#selectMenuTo option').textContent = 'Binary'
    option.value = 'Euro';
    option.textContent = 'Dollar';
    selectMenu.appendChild(option);
    
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');

    document.querySelector('button').addEventListener('click', click);
    const selectTo = document.getElementById('selectMenuTo');
    let check = '';

    selectTo.addEventListener('change', (pickOne) => {
        check = pickOne.target.value;
    });

    function click() {

        if (check === 'euro') {
            result.value = input.value * 1.95;
            
        } else {
            result.value = input.value * 1.76;
        }
    }
}