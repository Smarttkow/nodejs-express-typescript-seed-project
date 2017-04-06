/**
 *
 * Created by Smarttkow on 4/5/17.
 */
import * as express from 'express';

export const index = express.Router();

index.get('/', (req, res, next) => {
    res.render('index');
});