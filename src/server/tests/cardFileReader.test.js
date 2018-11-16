const {expect} = require('chai');
const CardFileReader = require('../app/cardFileReader');
const path = require('path');
const fs = require('fs');
describe('testing the data fetched from poker.txt',()=>{
  var fileData = null;
  beforeEach((done)=>{
    let fileReader = new CardFileReader('poker.txt');
    fileReader.read().then((res)=>{
      fileData = res;
      done();
    }).catch((err)=>{
     done(err);
    });
  });
  it('should fetch data from poker.txt',(done)=>{
    let fileReader = new CardFileReader('poker.txt');
    fileReader.read().then((res)=>{
      expect(res).is.not.null;
      done();
    }).catch((err)=>{
      done(err);
    });
  });
  it('should have all data from poker.txt',()=>{
    expect(fileData.length).to.eq(1001);
  });
  it('should read the first data correctly',()=>{
    expect(fileData[0]).eq('8C TS KC 9H 4S 7D 2S 5D 3S AC','First record from poker.txt');
  });
  it('should read the last data correctly',()=>{
    expect(fileData[0]).eq('8C TS KC 9H 4S 7D 2S 5D 3S AC','Last record from poker.txt');
  });
   
});