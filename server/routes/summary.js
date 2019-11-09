let express = require('express');
const SummaryController = require("../controllers/summary");

module.exports = app => {
    app.get( "/api/summary/", SummaryController.get);
}

