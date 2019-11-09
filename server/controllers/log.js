const model = require('../models/índex');
const log = model.log;

module.exports = {
    getAll(req, res) {
        return log.findAll()
            .then(logs => res.status(200).send(logs))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return log.create(req.body)
            .then( (result) => {
                res.status(200).send(result);
            }).catch(error =>{
                res.status(400).send({error: error})
            });
    },
    deleteAll(req, res) {
        return log.destroy({
            where: {}
        }).then(
            (result) => {
                res.status(200).send({deleted: true})
            }
        ).catch(error =>{
            res.status(400).send({error: error})
        });
    }
};