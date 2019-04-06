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

module.exports = apiRouter;