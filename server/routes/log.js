let express = require('express');
const LogController = require("../controllers/log");

module.exports = app => {
    app.get( "/api/log/", LogController.getAll);
    app.post("/api/log/", LogController.create);
    app.delete("/api/log/", LogController.deleteAll);
}

