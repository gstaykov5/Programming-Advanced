function solve() {
   const tbody = document.querySelector('tbody');
   const searchField = document.querySelector('#searchField');
   document.querySelector('#searchBtn').addEventListener('click', search);
   let temp = '';

   function search(e) {
      const searchFieldValue = searchField.value.toLocaleLowerCase();
      temp = searchFieldValue;
      searchField.value = '';

      [...tbody.querySelectorAll('tr')].forEach(remove => {
         remove.classList.remove('select')
      });

      [...tbody.querySelectorAll('td')].forEach(ele => {
         const eleValue = ele.textContent.toLocaleLowerCase();

         if (eleValue.includes(temp)) {
            ele.parentNode.classList.add('select')
         }
      })
   }
}