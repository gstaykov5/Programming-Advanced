function solve() {
  const anchor = Array.from(document.querySelectorAll('a'));
  const counters = anchor.map(el => el.nextElementSibling.innerText.split(' ')[1]);
  const container = document.querySelector('#page1 > .middled');
  container.addEventListener('click', function (e){
    const target = e.target;
    const parent = e.target.parentElement;
    const notTargetaAnchor = target.localName !== 'a';
    const notTargetParentAnchor = (parent && parent.localName !== 'a');
    if (notTargetaAnchor && notTargetaAnchor) {return;}
    const targetAnchor = notTargetaAnchor ? parent : target;
    const counterIndex = anchor.indexOf(targetAnchor);
    if (counterIndex == -1) {return;}
    counters[counterIndex]++;
    const paragraph = targetAnchor.nextElementSibling;
    paragraph.innerText = `visited ${counters[counterIndex]} times`
  });
  
}