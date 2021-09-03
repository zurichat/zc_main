const mongoose = require('mongoose')
const validator = require('validator')

const workspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please choose a workspace name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    channels: [String]
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace