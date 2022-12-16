import express from 'express';

import { createUser } from '../controllers/users.js';
import { getUserByID } from '../controllers/users.js';
import { deleteUserByID } from '../controllers/users.js';
import { patchUserByID } from '../controllers/users.js';

const router = express.Router();

let userData = [
]

router.get('/', (req,res) => {
    res.send(userData);
},);
 


router.post('/', createUser);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUserByID);

router.patch('/:id', patchUserByID);

export default router;

