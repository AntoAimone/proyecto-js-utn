document.addEventListener('DOMContentLoaded', () => {
    const charactersGrid = document.getElementById('characters-grid');
  
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        data.forEach(character => {
          const characterCard = document.createElement('article');
          characterCard.classList.add('character-card');
  
          const characterImage = document.createElement('img');
          characterImage.src = character.image ? character.image : '/img/tuyen-vo-tS-jh0M6JoA-unsplash.jpg' ;
          characterImage.alt = character.name;
  
          const characterName = document.createElement('h3');
          characterName.textContent = character.name;
  
          const characterHouse = document.createElement('p');
          characterHouse.textContent = character.house ? `Casa: ${character.house}` : 'Casa: Desconocida';
  
          characterCard.appendChild(characterImage);
          characterCard.appendChild(characterName);
          characterCard.appendChild(characterHouse);
  
          charactersGrid.appendChild(characterCard);
        });
      })
      .catch(error => console.error('Error fetching the characters:', error));
  });