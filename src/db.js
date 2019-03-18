import * as Sequelize from 'sequelize';
import cfg from '../config/config';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: cfg.db.logging,
    storage: cfg.db.location
});

const Item = sequelize.define('Item', {
    // Internal id
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    // Identifier for people
    identifier: {
        type: Sequelize.STRING,
        unique: true
    },
    note: {
        type: Sequelize.TEXT
    }
});

const History = sequelize.define('History', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
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
Item.hasMany(History);

const Location = sequelize.define('Location', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
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
Item.hasOne(Location);
History.hasOne(Location);

const User = sequelize.define('User', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    permissions: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});


const Request = sequelize.define('Request', {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING
    },
    requestmadedate: {
        type: Sequelize.DATE
    },
    requestdate: {
        type: Sequelize.DATE
    },
    returndate: {
        type: Sequelize.DATE
    }
});
Request.belongsTo(User, {as: "Author"});
Request.hasOne(Location);
History.hasOne(Request);

export {
    Item,
    History,
    Location,
    User,
    Request
}
