const defaultImages = require('./zc_frontend/public')

const defaultAvatar = (req, res, imgFile, gender, next) => {
  if (imgFile === '') {
    if (gender === 'Male' || gender === 'M') {
      // return imgFile = defaultImages.+'avatar1.svg';
      next()
    } else {
      // return imgFile = defaultImages.+'avatar2.svg';
      next()
    }
  }
}

module.exports = defaultAvatar
