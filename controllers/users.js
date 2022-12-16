import {v4 as uuidv4} from 'uuid'

let userData = []


export const getUser = (req,res) => {
    res.send(userData);
}

export const createUser = (req, res) =>{
    const user = req.body;
    userData.push({...user, id: uuidv4()});
    res.send(`Username : ${user.name}`);
}

export const getUserByID = (req, res) => {
    const {id} = req.params;

    const userDataById = userData.find((user) => user.id == id);
    res.send(userDataById);
}

export const deleteUserByID = (req, res)=> {
    const { id } = req.params;
     userData = userData.filter((user) => user.id != id);
    res.send(`User is deleted ${id}`);
}

export const patchUserByID = (req, res) => {
    const {id} = req.params;
    const {name, address, age} = req.body;
    
    const user = userData.find((user) => user.id == id);
    if(name) user.name = name
    if(address) user.address = address
    if(age) user.age = age
     
    res.send("User is updated");
    
}