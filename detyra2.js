const symbols = ['🍎', '🍌', '🍇', '🍒', '🍉', '🍍', '🥝', '🥥'];

let cards = [...symbols, ...symbols];


cards = cards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('gameBoard');

let flippedCards = [];
let matchedPairs = 0;


cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.dataset.index = index;
  card.textContent = '';
  card.addEventListener('click', handleCardClick);
  gameBoard.appendChild(card);
});


function handleCardClick(e) {
  const card = e.currentTarget;

 
  if (card.classList.contains('flipped') || flippedCards.length === 2) return;

  
  card.classList.add('flipped');
  card.textContent = card.dataset.symbol;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
      matchedPairs++;
      flippedCards = [];

      if (matchedPairs === symbols.length) {
        setTimeout(() => {
          alert('Urime! I gjete të gjitha çiftet! 🎉');
        }, 500);
      }
    } else {
    
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
        flippedCards = [];
      }, 1000);
    }
  }
}