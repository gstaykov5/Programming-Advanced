function solve() {
  const exerciseInput = document.getElementById('input');
  const exerciseOutput = document.getElementById('output');

  const inputValue = exerciseInput.innerText.split('. ');
  
  let newParagraph = document.createElement('p');
  let counter = 0

  for (let i = 0; i < inputValue.length; i++) {
    counter++;
    const line = inputValue[i]
    newParagraph.innerText += line;

    if (counter % 3 === 0) {
      exerciseOutput.appendChild(newParagraph);
      newParagraph = document.createElement('p');  
    }
  }

  exerciseOutput.appendChild(newParagraph);
} 