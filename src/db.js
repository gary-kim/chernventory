import * as Sequelize from 'sequelize';
import cfg from '../config/config';

const sequelize = new Sequelize(`sqlite:${cfg.db.name}`, {
    logging: cfg.db.logging
});

const Item = sequelize.define('Item', {
    // Internal id
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    // Identifier for people
    identifier: {
        type: Sequelize.STRING
    },
    note: {
        type: Sequelize.TEXT
    }
});

const History = sequelize.define('History', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    loandate: {
        type: Sequelize.DATE
    },
    returndate: {
        type: Sequelize.DATE
    },
    notes: {
        type: Sequelize.TEXT
    }
});

const Location = sequelize.define('Location', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    short_name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    }
});