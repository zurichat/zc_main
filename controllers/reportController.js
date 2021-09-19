const axios = require('axios')

exports.login = (req, res) => {
    const options = {
        headers: {
            'Authorization': `Basic ${token}`
        }
    };

    const email = 'aland6209@gmail.com'

    axios
        .post('https://api.zuri.chat/data/write', {
            plugin_id: '',
            organization_id: '',
            bulkwrites: true,
            payload: {
                'reporter_email': email,
                'offender_email': req.body.offender_email,
                'anonymous': req.body.anonymous,
                'subject': req.body.subject,
                'body': req.body.description
            }
        })
        .then(res => {
            console.log('Report successfully created')
            res.end()
        })
        .catch(error => {
            console.log(error)
        }, options)
}