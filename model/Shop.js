const sequelize = require('sequelize')
const db = require('../database/database');


const Shop = db.define('Shop', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    purchased_items: {
        type: sequelize.STRING,
        allowNull: false
    },
    total_amount: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    branch_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    discount: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    grand_total: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Shop;