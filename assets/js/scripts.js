class Memory Game {
constructor (totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining');
    this.ticker = document.getElementById('flips');
}

startGame () {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;

    this.shuffleCards();
}
flipCard(card) {
     if(this.canFlipCard) {
         this.totalClicks++;
         this.ticker.innerText = this.totalClicks;
         card.classList.add('visible');

        
     }
}

shuffleCards() {
    for(let i = this.cardsArray.length -1; i > 0; i--) {
       let randIndex = Match.floor(Math.random() * (i+1));
       this.cardsArray[randomIndex].style.order = i;
       this.cardsArray[i].style.order = randomIndex;
    }
}

canFlipCard(card) {
    return true;
    //return !this.busy && !this.matchedCards.includes(cards) && card !== this.cardToCheck;
}
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card' ));
    let game = new Memory Game(100, cards);
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        })
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        })
    })
}

if(document.readyState === 'loading') {
document.addEventListener('DOMContentloaded', ready());
} else {
    ready();
}