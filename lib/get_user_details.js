
var user = {
    firstName: 'firstname',
    lastName: 'lastname',
    userStatus: 'user_status'
};

exports.getUserInfo = (req, res) => {
    res.json({
    status: 'success',
    user
    });
};