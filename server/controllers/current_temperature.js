const model = require('../models/índex');
const current_temperature = model.current_temperature;

module.exports = {
    get(req, res) {
        return current_temperature.findByPk(1)
            .then(current_temperature => res.status(200).send(current_temperature))
            .catch(error => res.status(400).send(error));
    },
    upsert(req, res) {
        return current_temperature.upsert({id: 1, temperature: req.body.temperature})
            .then( (result) => {
                res.status(200).send({success: true});
            }).catch(error =>{
                res.status(400).send({error: error})
            });
    },
};