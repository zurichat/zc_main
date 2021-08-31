const express = require("express");
const APIRouter = express.Router();

// logout handle
APIRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = APIRouter;
