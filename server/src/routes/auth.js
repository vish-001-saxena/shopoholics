import {Router} from 'express'; import {register,login,me,logout} from '../controllers/auth.js'; import {auth} from '../middleware/auth.js';
const r=Router();r.post('/register',register);r.post('/login',login);r.get('/me',auth,me);r.post('/logout',logout);export default r;
