const fs = require('fs')
const path = require('path');

//var newArr = [];
module.exports.getFiles = (folderPath, fileName, newArr = []) => {

    const allNames = fs.readdir(folderPath, (err, folder) =>{
       
        if(err) {
            console.log(err)
            return false
        }

       const newArray = folder.filter((file)=>{
            const filePath = path.join(folderPath, file);
            const baseName = path.basename(filePath)
          fs.stat(filePath, (err, stat)=>{
                if(err) {
                    console.log(err)
                }
                if(stat.isDirectory()) {
                    getFiles(filePath, fileName)
                }
                if( baseName.includes(fileName)){
                    return true
                } 
            })

            if( baseName.includes(fileName)){
                return true
            } 
        })
        newArr = [...newArray]        
    })

    console.log({newArray})
}





    