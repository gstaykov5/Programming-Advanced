function solve() {
    const mainDiv = document.querySelector('.wrapper');
    
    const openMenu = mainDiv.firstElementChild.nextElementSibling;
    const progresMenu = openMenu.nextElementSibling;
    const complateMenu = progresMenu.nextElementSibling;

    const textInput = document.querySelector('#task');
    const descriptionInput = document.querySelector('#description');
    const dateInput = document.querySelector('#date');
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', add);
    
    
    
    
    function add(e) {
        // textInput, descriptionInput, dateInput are cleared automatically and i dont know why !!!!!
        
        if ((textInput && descriptionInput && dateInput) != '') {
            const ele = createEle(textInput, descriptionInput, dateInput);
            openMenu.lastElementChild.appendChild(ele);
        }        
    }
        
}

function createEle(textInput, descriptionInput, dateInput) {
    
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    const pDescr = document.createElement('p');
    const pDate = document.createElement('p');
    const div = document.createElement('div');
    div.classList = 'flex';
    const startBtn = document.createElement('button');
    startBtn.classList = 'green';
    startBtn.textContent = 'Start';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'red';
    deleteBtn.textContent = 'Delete';
    
    h3.textContent = textInput.value;
    pDescr.textContent = descriptionInput.value;
    pDate.textContent = dateInput.value;
    
    div.appendChild(startBtn);
    div.appendChild(deleteBtn);
    a.appendChild(h3);
    a.appendChild(pDescr);
    a.appendChild(pDate);
    a.appendChild(div);
    
    return a;
}