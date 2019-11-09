const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

module.exports = (app) => {
    // Loop through all the route files and instantiate thm.
    fs
        .readdirSync(__dirname)
        .filter(file => {
            // Make sure file is a valid JS file
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        }) // Loop through ever route file
        .forEach(file => {
            // Require the route and instantiate route
            require(__dirname + '/' + file)(app);
            // console.log(JSON.stringify(file));
        });
};