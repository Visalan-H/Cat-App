import mongoose from 'mongoose';
import express from 'express';
import router from './routes/catRoutes.js';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const mongoDBURL = process.env.mongoDBURL;

const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'))
app.use('/cats', router)
mongoose.connect(mongoDBURL)
    .then((res) => app.listen(3000, '0.0.0.0', () => {
                    console.log(`Server is running on:
                                - Localhost: http://localhost:3000
                                - Local IP: http://192.168.1.7:3000`);
    }))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.redirect('/cats')
})