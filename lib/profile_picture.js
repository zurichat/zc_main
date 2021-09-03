const { default: axios } = require("axios");
const multer = require("multer");
const storage = multer.memoryStorage();
const multerUploads = multer({storage: storage}).single('profile_picture');

exports.uploadProfilePhoto = (req, res) => {
    var photoBuffer = req.file.buffer.toString()

    const options = {
        url: "",
        formData: {image: photoBuffer}
    };
    // cant be tested till api provided by zuri core.
    // const response = await axios.post("",
    // options);

    console.log(options);

    res.send("Profile image uploaded successfully.")
}