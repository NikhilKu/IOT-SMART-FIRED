const model = require('./models/índex');
const current_status = model.current_status;
const current_temperature = model.current_temperature;
const log = model.log;
const socketIo = require("socket.io");

module.exports = (server) => {
    let interval;
    const io = socketIo(server);

    const getApiAndEmit = async socket => {
        try {
            let currentStatus = await current_status.findByPk(1);
            let currentTemperature = await current_temperature.findByPk(1);
            let logs = await log.findAll();
            let summary = {
                status: currentStatus,
                temperature: currentTemperature,
                logs: logs,
            };

            io.sockets.emit("summary", summary);
        } catch (error) {
           console.log({error: error})
        }
    };

    io.on("connection", socket => {
        console.log("New client connected");
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 2000);
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });
};