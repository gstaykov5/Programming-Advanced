function solve() {
   const tbody = document.querySelector('tbody');
   const trItems = document.querySelector('tbody').querySelectorAll('tr');
   tbody.addEventListener('click', mark);


   function mark(e) {
      const currentTarget = e.target.parentNode;
      
      if (currentTarget.style.background === '') {
         Array.from(trItems).forEach(elements => elements.style.background = '');
         currentTarget.style.background = '#413f5e';

      } else {
         currentTarget.style.background = '';
      }
   }
}