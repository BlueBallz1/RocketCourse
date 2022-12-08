const fs = require('fs');
const path = require('path');

const pathBoys = path.join(__dirname,'Boys');
const pathGirl = path.join(__dirname,'Girls');


fs.readdir(pathBoys,function(err,files){
    if (err) throw err;
    for(items of files){
        
        const filePath = path.join(pathBoys,`${items}`)   
        
        fs.readFile(filePath,'utf8',function(err,data){
            if(err) throw err;
            let jsonParse = JSON.parse(data)

            if(jsonParse.sex === 'Girl'){
                fs.rename(filePath,path.join(pathGirl,`${jsonParse.name}.json`),err => {
                    if(err) throw err;
                    console.log(`${jsonParse.name} Has been moved to ${pathGirl}`);
                });
            }
        });
    }
})


fs.readdir(pathGirl,function(err,files){
    if (err) throw err;
    for(items of files){
        
        const filePath = path.join(pathGirl,`${items}`)   
        
        fs.readFile(filePath,'utf8',function(err,data){
            if(err) throw err;
            let jsonParse = JSON.parse(data);

            if(jsonParse.sex === 'Boy'){
                fs.rename(filePath,path.join(pathBoys,`${jsonParse.name}.json`),err => {
                    if(err) throw err;
                    console.log(`${jsonParse.name} Has been moved to ${pathBoys}`);
                });
            }
        });
    }
})
