function solve() {
  const counter = 0;
  const answers = document.querySelectorAll('.answer-text');
  [...answers].forEach(ele => {
    ele.addEventListener('click', click);
    
  })

  function click(e) {
    const check = e.target;
    const textValue = check.textContent;
    
  }
}
