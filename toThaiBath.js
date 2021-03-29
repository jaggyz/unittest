const exchangeRate = require('./exchangeRate');

module.exports = (price) => {
    const currency = exchangeRate('USD', 'THB');
    return price * currency;
};