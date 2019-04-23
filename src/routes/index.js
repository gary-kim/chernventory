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

import express from 'express';
import {Item} from '../db';
import apiRouter from './api';
import renderOptions from '../res/stdrenderoptions'

const router = express.Router();


router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.render('landing', renderOptions({page: 'Landing Page'}));
});

export default router;