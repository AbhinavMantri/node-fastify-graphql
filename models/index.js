const product = require('./product');

module.exports.getSchemas = () => {
    return `
        ${product}
    `;
}