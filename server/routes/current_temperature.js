let express = require('express');
const TemperatureController = require("../controllers/current_temperature");

module.exports = app => {
    app.get( "/api/temperature/", TemperatureController.get);
    app.post("/api/temperature/", TemperatureController.upsert);
}

