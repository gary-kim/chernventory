/*
    
    Chernventory is an self-hosted inventory and item request solution.

    Copyright (C) 2019 Gary Kim <gary@garykim.dev>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, version 3.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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

const Client = sequelize.define('Client', {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    },
    clientkey: {
        type: Sequelize.STRING
    },
    lastseen: {
        type: Sequelize.DATE
    }
});
Client.belongsTo(User, {as: "Clients"});

export {
    Item,
    History,
    Location,
    User,
    Request,
    Client
}
