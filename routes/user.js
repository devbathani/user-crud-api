import express from 'express';
import {v4 as uuidv4} from 'uuid'
const router = express.Router();

const userData = [
]

router.get('/', (req,res) => {
    res.send(userData);
},);

router.post('/', (req, res) =>{
    const user = req.body;
    userData.push({...user, id: uuidv4()});
    res.send(`Username : ${user.name}`);
},);

export default router;

