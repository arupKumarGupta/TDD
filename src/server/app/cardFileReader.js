const path = require('path');
const fs = require('fs');

class CardFileReader{
    constructor(filename){
        this.filename = filename;
    }
    read(){
        return new Promise((resolve,reject)=>{
            fs.readFile(path.join(__dirname,'..','assets','poker.txt'),'utf8',(err,data)=>{
                if(err)
                    return reject(err);
                let records = data.split('\n');
                resolve(records);
            });
        });
    }
}
module.exports = CardFileReader;