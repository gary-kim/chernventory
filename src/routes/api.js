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
import {Item} from '../db'

const app = express();

var apiRouter = express.Router()

//  api accessible at: api/item
var itemRouter = express.Router({mergeParams: true});
var itemInfoRouter = express.Router({mergeParams: true});

itemRouter.use('/:itemId/info', itemInfoRouter);

itemInfoRouter.route('/').get(async (req, res) => {
    let item = await Item.findById(req.params.itemId);
    if(!item)    {
        res.status(404).json({exists: false});
    }
    let tr = {};
    res.status(200).json(tr);
});


apiRouter.use('/item', itemRouter);

export default apiRouter;