const express = require("express");
const cors = require('cors')
const auth = require('../middlewares/auth');
const { json } = require("express");

module.exports = (app) => {
    app.use(cors())
    app.use(json())
    app.use(auth)
};