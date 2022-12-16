import express from 'express';
import {v4 as uuidv4} from 'uuid'
const router = express.Router();

let userData = [
]

router.get('/', (req,res) => {
    res.send(userData);
},);

router.post('/', (req, res) =>{
    const user = req.body;
    userData.push({...user, id: uuidv4()});
    res.send(`User id : ${user.id}`);
},);

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const userDataById = userData.find((user) => user.id == id);
    res.send(userDataById);
})

router.delete('/:id', (req, res)=> {
  const { id } = req.params;
   userData = userData.filter((user) => user.id != id);
  res.send(`User is deleted ${id}`);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {name, address, age} = req.body;
    
    const user = userData.find((user) => user.id == id);
    if(name) user.name = name
    if(address) user.address = address
    if(age) user.age = age
     
    res.send("User is updated");
    
});

export default router;

