function solve() {
   const topSide = document.querySelector('#player1Div');
   const bottomSide = document.querySelector('#player2Div');
   const resultDiv = document.querySelector('#result');
   const history = document.querySelector('#history');



   [...topSide.querySelectorAll('img')].forEach(card => {
      card.addEventListener('click', topCards, )
   });
   [...bottomSide.querySelectorAll('img')].forEach(card => {
      card.addEventListener('click', bottomCards)
   })




   function topCards(e) {

      e.target.src = 'images/whiteCard.jpg';
      const topCard = e.target.name;
      resultDiv.firstChild.textContent = topCard
      topSide.classList.add('disabled');
      


   }

   function bottomCards(e) {

      e.target.src = 'images/whiteCard.jpg';
      const bottomCard = e.target.name;
      resultDiv.lastChild.textContent = bottomCard;
      topSide.classList.add('select');


   }

   
}