import express from 'express';

import { getUser } from '../controllers/users.js';
import { createUser } from '../controllers/users.js';
import { getUserByID } from '../controllers/users.js';
import { deleteUserByID } from '../controllers/users.js';
import { patchUserByID } from '../controllers/users.js';

const router = express.Router();



router.get('/', getUser);
 
router.post('/', createUser);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUserByID);

router.patch('/:id', patchUserByID);

export default router;

