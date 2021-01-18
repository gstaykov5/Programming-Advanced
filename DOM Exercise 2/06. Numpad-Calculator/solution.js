function solve() {
    document.querySelector('.keys').addEventListener('click', click);
    document.querySelector('.clear').addEventListener('click', click);

    function click(e) {
        let buttonValue = Number(e.target.value);
        const sum = document.getElementById('expressionOutput').innerText.split(' ');
        const inputResult = document.getElementById('expressionOutput');
        const outputResult = document.getElementById('resultOutput');

        if((sum.length < 2 || sum.length >= 2) && isNaN(buttonValue) == false) {
            inputResult.textContent += `${buttonValue}`;


        } else if (isNaN(buttonValue) === true) {
            buttonValue = e.target.value;

            if (buttonValue !== '.' && buttonValue !== '=' && buttonValue !== 'C' && sum.length == 1) {
                inputResult.textContent += ` ${buttonValue} `;

            } else if(buttonValue === '.') {
                inputResult.textContent += `${buttonValue}`;
                
            } else if (buttonValue === '=') {
                let first = Number(sum[0]);
                let operand = sum[1];
                let second = Number(sum[2]);
                outputResult.innerText = result;
                inputResult.innerText = '';

            } else if (buttonValue === 'Clear') {
                document.getElementById('expressionOutput').textContent = '';
                document.getElementById('resultOutput').textContent = '';
            }
        }
        
    }
    
}