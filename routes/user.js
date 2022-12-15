import express from 'express';
const router = express.Router();

const userData = [
    {
        name : "Dev Bathani",
        address : "Mars",
        age : 21
    },
    {
        name : "Dev Bathani",
        address: "Mars",
        age: 21
    },
    {
        name : "Dev Bathani",
        address: "Mars",
        age : 21
    }
]

router.get('/', (req,res) => {
    res.send(userData);
},);

router.post();

export default router;

