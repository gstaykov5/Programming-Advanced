function addItem() {
    const text = document.getElementById('newText').value;
    const ul = document.getElementById('items');

    const newLi = document.createElement('li');

    newLi.textContent = text;
    const remove = document.createElement('a');
    const deleteBox = document.createTextNode('[Delete]');
    remove.appendChild(deleteBox);
    remove.href = '#';

    remove.addEventListener('click', deleteItem);

    newLi.appendChild(remove);
    ul.appendChild(newLi);
    console.log(ul);
    document.getElementById('newText').value = '';

    function deleteItem() {
        newLi.remove()
    }

}