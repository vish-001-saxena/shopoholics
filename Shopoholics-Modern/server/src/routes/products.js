import {Router} from 'express'; import {list,get,categories} from '../controllers/products.js'; const r=Router();r.get('/',list);r.get('/categories',categories);r.get('/:id',get);export default r;
