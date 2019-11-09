let express = require('express');
const statusController = require("../controllers/current_status");

module.exports = app => {
    app.get( "/api/status/", statusController.get);
    app.post("/api/status/", statusController.upsert);
    app.post("/api/threshold/", statusController.upsertThreshold);
}

