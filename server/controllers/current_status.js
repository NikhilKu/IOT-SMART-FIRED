const model = require('../models/índex');
const current_status = model.current_status;

module.exports = {
    get(req, res) {
        return current_status.findByPk(1)
            .then(current_status => res.status(200).send(current_status))
            .catch(error => res.status(400).send(error));
    },
    upsert(req, res) {
        return current_status.upsert({id: 1, status: req.body.status})
            .then( (result) => {
                res.status(200).send({success: true});
            }).catch(error =>{
                res.status(400).send({error: error})
            });
    },
    upsertThreshold(req, res) {
        return current_status.upsert({id: 1, status: true, threshold: req.body.threshold})
            .then( (result) => {
                res.status(200).send({success: true});
            }).catch(error =>{
                res.status(400).send({error: error})
            });
    },
};