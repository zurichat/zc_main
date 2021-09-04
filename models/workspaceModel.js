<<<<<<< HEAD
const mongoose = require('mongoose')
const validator = require('validator')

const workspaceSchema = new mongoose.Schema(
  {
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
    channels: {
      type: [String],
      default: ['announcements']
    },
    subscriptionPlan: {
      type: String,
      default: 'Free'
    }
  },
  {
    timestamps: true
  }
)

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace
=======
const mongoose = require('mongoose')
const validator = require('validator')

const workspaceSchema = new mongoose.Schema(
  {
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
    channels: {
      type: [String],
      default: ['announcements']
    },
    subscriptionPlan: {
      type: String,
      default: 'Free'
    }
  },
  {
    timestamps: true
  }
)

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace
>>>>>>> 012fd747b12c9da8f068bdd3ea593dc87edeae53
