const mongoose = require('mongoose')

const workspaceSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    channels: [String]
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace