const express = require('express')
const router = express.Router()

const ejs = require('ejs');
const path = require('path');
 

router.get('/verify', (req, res, next) => {
    let emailTemplate;
    let capitalizedFirstName = 'John';
    let userEmail = 'John@example.com';
    
    ejs
    .renderFile(path.join(__dirname, '../../views/emailVerification.ejs'),
    {
      user_firstname: capitalizedFirstName,
      confirm_link: 'http://www.zurichat.com/confirm=' + userEmail
    })
    .then(result => {
      emailTemplate = result;
      res.send(emailTemplate);
    })
    .catch(err => {
      res.status(400).json({
          message: 'Error Rendering emailTemplate',
          error: err
         });
      });
    
});

module.exports = router;