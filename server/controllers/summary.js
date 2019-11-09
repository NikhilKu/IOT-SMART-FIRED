const model = require('../models/índex');
const current_status = model.current_status;
const current_temperature = model.current_temperature;
const log = model.log;

module.exports = {

    async get(req, res) {
        try {
            let currentStatus = await current_status.findByPk(1);
            let currentTemperature = await current_temperature.findByPk(1);
            let logs = await log.findAll();
            let summary = {
                status: currentStatus,
                temperature: currentTemperature,
                logs: logs,
            };

            res.status(200).send(summary);

        } catch (error) {
            res.status(400).send(error);
        }
    },
};