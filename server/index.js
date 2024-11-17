import mongoose from 'mongoose';
import express from 'express';
import { mongoDBURL } from './config.js';
import router from './routes/catRoutes.js'; 
import cors from 'cors'
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']    
}))

app.use(express.json())
app.use('/cats',router)

mongoose.connect(mongoDBURL)
    .then((res) => app.listen(3000, () => console.log("http://localhost:3000")))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.redirect('/cats')
})