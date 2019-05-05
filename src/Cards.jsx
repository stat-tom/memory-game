import shuffle from 'shuffle-array';


class Cards {
  constructor() {
    this.cards = [];
    this.Easy_Tiles = [6];
    this.Medium_Tiles = [8];
    this.Hard_Tiles = [10];
  }

  createCardSetEasy() {

    // Create a set of cards with pairs of images
    this.cards = [];
    let id = 1;
    for(let i = 1; i <= this.Easy_Tiles; i++) {
      let card1 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      id++;
      let card2 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      this.cards.push(card1);
      this.cards.push(card2);
      id++;
    }

    // Shuffle the card set
    shuffle(this.cards);  
  }

  createCardSetMedium() {

    this.cards = [];
    let id = 1;
    for(let i = 1; i <= this.Medium_Tiles; i++) {
      let card1 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      id++;
      let card2 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      this.cards.push(card1);
      this.cards.push(card2);
      id++;
    }

    shuffle(this.cards);  
  }

  createCardSetHard() {

    this.cards = [];
    let id = 1;
    for(let i = 1; i <= this.Hard_Tiles; i++) {
      let card1 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      id++;
      let card2 = {
        id: id,
        image: i,
        imageUp: false,
        matched: false
      };
      this.cards.push(card1);
      this.cards.push(card2);
      id++;
    }

    shuffle(this.cards);  
  }

  getCard(id) {
    for(let i = 0; i < 2 * this.Easy_Tiles || this.Medium_Tiles || this.Hard_Tiles; i++) {
      if (this.cards[i].id === id) {
        return this.cards[i];
      }
    };
  }

  flipCard(id, imageUp) {
    this.getCard(id).imageUp = imageUp;
  }

  setCardAsMatched(id, matched) {
    this.getCard(id).matched = matched;
  }

  theSameCards(id1, id2) {
    if (this.getCard(id1).image === this.getCard(id2).image) {
      return true;
    } else {
      return false;
    }
  }

};

export default Cards;
