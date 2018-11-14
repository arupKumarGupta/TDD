const mocha = require('mocha');
const {expect} = require('chai');
const Card = require('./../app/card');
const path = require('path');
describe('testing card modules',()=>{
    var card = null;
    beforeEach(()=>{
        card = new Card();
    });
    it('should create a card which is not null',()=>{
        let card = new Card();
        expect(card).is.not.null;
    });
    it('should create a 9 of hearts',()=>{
        card.card(9,'hearts');
        expect(card.faceValue).to.equal('9');
        expect(card.suit).to.equal('hearts');
        expect(card.value).to.equal(9);
        expect(card.name).to.equal('Nine');
        
    });
    it('should create a Ace of Spades',()=>{
        card.card(1,'spades');
        expect(card.faceValue).to.equal('1');
        expect(card.suit).to.equal('spades');
        expect(card.value).to.equal(1);
        expect(card.name).to.equal('Ace'); 
    });
    it('should create a king of diamonds',()=>{
        card.card(13,'diamonds');
        expect(card.faceValue).to.equal('K');
        expect(card.suit).to.equal('diamonds');
        expect(card.value).to.equal(13);
        expect(card.name).to.equal('King'); 
    });
    it('should have a image of the card',()=>{
        expect(card).has.property('imagePath');
    });
    it('should get image path for ace of spades',()=>{
        card.card(1,'spades');
        expect(card.imagePath).to.equal(path.join(__dirname,'..','assets','ace_of_spades.png'));
    });
    it('should get image path for queen of hearts',()=>{
        card.card(12,'hearts');
        expect(card.imagePath).to.equal(path.join(__dirname,'..','assets','queen_of_hearts.png'));
    });
    it('should get image path for 6 of clubs',()=>{
        card.card(6,'clubs');
        expect(card.imagePath).to.equal(path.join(__dirname,'..','assets','6_of_clubs.png'));
    });
});
