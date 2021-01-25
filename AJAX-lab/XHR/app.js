function loadRepos() {
   const url = `https://swapi.dev/api/people/`;
   const div = document.querySelector('#res');

   const btn = document.querySelector('button')
   btn.addEventListener('click', (e) => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            let chars = data.results;
            div.innerHTML = chars.map(ele => `<li>${ele.name}: Heigh- ${ele.height} Mass- ${ele.mass} Hair color- ${ele.hair_color} Skin color- ${ele.skin_color}</li>`).join('')
         })
         .catch(err => {
            div.innerHTML = `<li>No characters</li>`
         })
   })
}

loadRepos()