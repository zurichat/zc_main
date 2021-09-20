const {getFiles} = require('../Helpers/Directory');
const path = require('path')


module.exports.searchFile = async (req, res) =>{
   const {channelName, fileName} = req.query;
 try{
     //const folderPath = path.resolve(__dirname, channelName);
     const folderPath = `./data/${channelName}`
     const data = await getFiles(folderPath, fileName);

        if(data.length){
            return  res.status(200).json({message: 'Found', data: data})
        }
        
        return res.status(404).json({message: 'Not Found', data: null})  
    }
    catch(error){
        return res.status(500).json({message: 'Server Error', data: null})  
    }
}

// const start = async ()=>{
//     const fileName = 'cont'
    
//     const data = await getFiles('./data/football', 'r');
//     console.log(data, 'data');
// }

// start();


























// const fs = require('fs')
// const path = require('path');

// module.exports.getFiles = (req, res) => {
//    const { folderPath, fileName} = req.query;
//    try{
//     const allNames = fs.readdir(folderPath, (err, folder) =>{
       
//         if(err) {
//             console.log(err)
//             return false
//         }
//        const newArray = folder.filter((file)=>{
//             const filePath = path.join(folderPath, file);
//             const baseName = path.basename(filePath)
//           fs.stat(filePath, (err, stat)=>{
//                 if(err) {
//                     console.log(err)
//                 }
//                 if(stat.isDirectory()) {
//                     folderPath = filePath;
//                     getFiles(folderPath, fileName)
//                 }
//                 if( baseName.includes(fileName)){
//                     return true
//                 } 
//             })

//             if( baseName.includes(fileName)){
//                 return true
//             } 
//         })
//         res.status(200).json(newArray);
//     })

//    }
//    catch(error){
//     res.json(404).json({data: 'Not found'});
//    }
// }





