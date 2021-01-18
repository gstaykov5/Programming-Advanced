function solve() {
    document.querySelector('#exercise button').addEventListener("click", click);
    let list = {};
    
    const collection = document.querySelector('ol').querySelectorAll('li');
    
    [...collection].forEach(ele => {

        if (ele.textContent.trim().length == 0) {
            return;
        }

        const upperCase = ele.textContent[0].toLocaleUpperCase();
        list[upperCase] = ele.textContent;
    })
    
    function click() {;
        const inputText = document.querySelector('input')
        const inputTextValue =  inputText.value;
        const letter = inputTextValue[0].toLocaleUpperCase();

        if (list.hasOwnProperty(letter) == false) {
            list[letter] = inputTextValue;
        } else {
            list[letter] = list[letter] + ', ' + inputTextValue;
        }
        
        const index = letter.charCodeAt(0) - 65;
        collection[index].textContent = list[letter];

        inputText.value = '';
        
    }
    
    
}