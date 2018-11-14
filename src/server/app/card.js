'use strict';
const suits = ['spades','clubs','hearts','diamonds'];
const faceValues = ['','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
const names = [null,'Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
const imageName = [null,'ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
const values = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
const path = require('path');
class Card{
    constructor(){
       this.value = this.getRandom(values);
       this.name = names[this.value];
       this.faceValue = faceValues[this.value];
       this.suit = this.getRandom(suits);
       this.imagePath = this.getImagePath();
    }
    card(value,suit){
        this.value = values[value];
        this.suit = suit;
        this.faceValue = faceValues[this.value];
        this.name = names[this.value];
        this.imagePath = this.getImagePath();
    }
    getRandom(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }
    getImagePath(){
        let imgPath = path.join(__dirname,'..','assets',`${imageName[this.value]}_of_${this.suit}.png`);
        return imgPath;
    }
}
module.exports = Card;