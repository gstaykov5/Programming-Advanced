function solve() {
    const trainingModules = document.querySelector('.modules');
    const lectureName = document.querySelector('input[name="lecture-name"]');
    const dateInput = document.querySelector('input[name="lecture-date"]');
    const moduleInput = document.querySelector('select[name="lecture-module"] option');
    const btn = document.querySelector('form button');
    btn.addEventListener('click', addLecToTrainong);

    // function listItems(moduleInputValue, lectureNameValue, dateInputValue) {

    //     const newDiv = document.createElement('div');
    //     const newH3 = document.createElement('h3');
    //     const newUl = document.createElement('ul');
    //     const newLi = document.createElement('li');
    //     const newH4 = document.createElement('h4');
    //     const newButton = document.createElement('button');

    //     newDiv.className = 'module';
    //     newLi.className = 'flex';
    //     newButton.textContent = 'Del';
    //     newButton.className = 'red';

    //     newH3.textContent = `${moduleInputValue} - MODULE`;
    //     newH4.textContent = `${lectureNameValue} - ${dateInputValue}`;

    //     newLi.appendChild(newH4, newButton);
    //     newUl.appendChild(newLi);
    //     newDiv.appendChild(newH3, newUl);
    //     trainingModules.appendChild(newDiv);
    // }

    function addLecToTrainong() {



        const moduleInputValue = moduleInput.value;
        const lectureNameValue = lectureName.value;
        const dateInputValue = dateInput.value

        if (lectureNameValue !== '' && dateInputValue !== '' && moduleInputValue !== 'Select module') {
            // const item = listItems(moduleInputValue, lectureNameValue, dateInputValue)
            const newDiv = document.createElement('div');
            const newH3 = document.createElement('h3');
            const newUl = document.createElement('ul');
            const newLi = document.createElement('li');
            const newH4 = document.createElement('h4');
            const newButton = document.createElement('button');

            newDiv.className = 'module';
            newLi.className = 'flex';
            newButton.textContent = 'Del';
            newButton.className = 'red';

            newH3.textContent = `${moduleInputValue} - MODULE`;
            newH4.textContent = `${lectureNameValue} - ${dateInputValue}`;

            newLi.appendChild(newH4, newButton);
            newUl.appendChild(newLi);
            newDiv.appendChild(newH3, newUl);
            trainingModules.appendChild(newDiv);
        }
    }


};
// not finished -> search for bug in index.html !!!