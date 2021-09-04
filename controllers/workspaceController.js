const Workspace = require('./../models/workspaceModel')

exports.createWorkspace = async (req, res, next) => {
  try {
    const workspace = await Workspace.create({
      name: req.body.name,
      email: req.body.email,
      channels: req.body.channels,
      subscriptionPlan: req.body.subscriptionPlan
    })

    res.status(200).json({
      status: 'success',
      message: 'workspace successfully created!',
      data: {
        workspace
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find()

    if (!workspaces) {
      return res.status(200).json({
        status: 'success',
        workspaces: 0,
        message: 'No workspace available!'
      })
    }

    res.status(200).json({
      status: 'success',
      workspaces: workspaces.length,
      data: {
        workspaces
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.getWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findById(req.params.id)

    if (!workspace) {
      return res.status(404).json({
        status: 'fail',
        message: 'No workspace with that ID!'
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        workspace
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.updateWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    )

    if (!workspace) {
      return res.status(404).json({
        status: 'fail',
        message: 'No workspace with that ID!'
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        workspace
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.deleteWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      message: 'Workspace deleted!'
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }
}
