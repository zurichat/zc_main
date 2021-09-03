// This would be updated to plug into zuri core in the future to get the required data.

var user = {
    first_name: "firstName",
    last_name: "lastName",
    user_status: "UserStatus"
}

exports.getUser = (req, res) => {
    res.json({
        status: 'success',
        user});
};