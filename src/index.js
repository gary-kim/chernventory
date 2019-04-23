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

import cfg from '../config/config';
import {User} from './db';
import express from 'express';
import router from './routes/index'

var app = express();
const port = cfg.port;
const domain = cfg.domain;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', router);

app.listen(cfg.port, () => console.log(`Server listening on port ${cfg.domain}:${cfg.port}!`))

//console.log(`Server would be started on ${cfg.domain}:${cfg.port}.`);

// Need to implement router.

