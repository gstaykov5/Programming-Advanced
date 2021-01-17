function solve() {
    const resultMsg = document.querySelector('#check');
    const btns = document.querySelector('td[colspan="3"]');
    const checkBtn = btns.firstElementChild.addEventListener('click', check);
    const clearBtn = btns.lastElementChild.addEventListener('click', clear);

    function check(e) {
        const tbody = document.querySelector('tbody').querySelectorAll('tr');
        const firstLine = tbody[0];
        const secondLine = tbody[1];
        const thirdLine = tbody[2];
        console.log(firstLine.querySelectorAll('td'));
        

        tbody.forEach(e => {
            const currentLine = e.querySelectorAll('td');

            for (let i = 0; i < currentLine.length; i++) {
                const element = currentLine[i];
                console.log(element);
                
            }
        })
    };

    function clear(e) {
        
    };
}