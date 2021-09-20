const fs = require('fs')
const path = require('path');

module.exports.getFiles = (req, res) => {
   const { folderPath, fileName} = req.query;
   try{
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
                    folderPath = filePath;
                    getFiles(folderPath, fileName)
                }
                if( baseName.includes(fileName)){
                    return true
                } 
            })

            if( baseName.includes(fileName)){
                return true
            } 
        })
        res.status(200).json(newArray);
    })

   }
   catch(error){
    res.json(404).json({data: 'Not found'});
   }
}





