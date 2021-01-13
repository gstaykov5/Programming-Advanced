function addItem() {
    const li = document.createElement('li');
    let ul = document.getElementById('items')
    const input = document.getElementById('newItemText').value;
    
    li.innerText = input;
    ul.appendChild(li);
    document.getElementById('newItemText').value = '';
}