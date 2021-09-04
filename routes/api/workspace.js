const express = require('express')
const workspaceController = require('./../../controllers/workspaceController')

const router = express.Router()

// /GET get all plugins
router.post('/workspaces', workspaceController.createWorkspace)
router.get('/workspaces', workspaceController.getAllWorkspaces)
router.get('/workspaces/:id', workspaceController.getWorkspace)
router.patch('/workspaces/:id', workspaceController.updateWorkspace)
router.delete('/workspaces/:id', workspaceController.deleteWorkspace)


module.exports = router
