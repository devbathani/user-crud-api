import bodyParser from 'body-parser';
import express from 'express';
import usersRoutes from './routes/user.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))