function createArticle() {
	const articleInput = document.getElementById('createTitle');
	const articleContent = document.getElementById('createContent');
	const articleList = document.getElementById('articles');

	const inputValue = articleInput.value;
	const contentValue = articleContent.value;

	if(!inputValue || !contentValue) { return; };

	const headingInput = document.createElement('article')
	const divInput = document.createElement('div');
	const paragraph = document.createElement('p');

	headingInput.appendChild(divInput);
	headingInput.appendChild(paragraph);
	
	articleInput.appendChild(headingInput);

	divInput.innerText = inputValue;
	paragraph.innerText = contentValue;

	articleInput.value = ' ';
	articleContent.value = ' ';
}