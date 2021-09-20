const {readdir, stat} = require('fs').promises
const path = require('path');

//var newArr = [];
const getFiles = async (folderPath, fileName) => {
    try{
        const allFileNames = await readdir(folderPath)
        const newArray = allFileNames.filter( file =>{
           
            const filePath = path.join(folderPath, file);
            const baseName = path.basename(filePath);
    
                                       
            if(baseName.includes(fileName)){
                return true
            }
              
        })
        return newArray;
    }


    catch(error){
        console.log(error.message)
    }
}






// const innerFiles = await stat(filePath);
            // if( innerFiles.isDirectory()){  
            //     try{
            //         await getFiles(filePath, this.fileName);  
            //     }               
            //     catch(error){
            //         console.log(error.message)
            //     }
            //     if(baseName.includes(fileName)){
            //         return true
            //     }
            // } 



module.exports = {
    getFiles
};
    