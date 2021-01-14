function encodeAndDecodeMessages() {
    const main = document.querySelector('main')
    const btn = main.querySelectorAll('button');
    const encodeArea = main.firstElementChild.querySelector('textarea');
    const decodeArea = main.lastElementChild.querySelector('textarea');
    let currentText = '';
    
    
    [...btn].forEach(btn => btn.addEventListener('click', send));

    
    function send(e) {
        const target = e.target;
        const check = target.textContent;
        let asciiText = '';
        
        if (check.includes('Encode')) {
            const transformToAscii = encodeArea.value;
            
            for (const ch of transformToAscii) {
                const charAt = ch.charCodeAt() + 1;
                asciiText += String.fromCharCode(charAt);
            }
            currentText = encodeArea.value;
            decodeArea.value = asciiText;
            encodeArea.value = '';

        } else if (check.includes('Decode') && decodeArea.value !== '') {
            decodeArea.value = currentText;
        }

    }

}