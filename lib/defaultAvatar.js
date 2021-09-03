const defaultImages = require('./zc_frontend/public');

const defaultAvatar = (req, res, imgFile, gender, next) => {
  if(imgFile === ''){
    if(gender === 'Male' || gender === 'M'){
      return imgFile = defaultImages.+'avatar1.svg';
    }else {
      return imgFile = defaultImages.+'avatar2.svg';
    }
  }
}

module.exports = defaultAvatar;
