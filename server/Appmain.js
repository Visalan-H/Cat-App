import express from 'express'
import mongoose from 'mongoose';
import Cat from './models/Cat.js';
const dbURI = "mongodb+srv://vizz-alan:vizz1234@mycluster.lqoft.mongodb.net/catsdb?retryWrites=true&w=majority&appName=myCluster";
const app = express();

mongoose.connect(dbURI)
    .then((res) => app.listen(3000, () => console.log("listening")))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('<p>hello</p>')
})

app.get('/add-my-cat', (req, res) => {
    const cat = new Cat({
        name: "Vizz3",
        description: "I am a cat too",
        })

        cat.save()
            .then((cat) => res.send(cat))
            .catch((err) => console.log(err));
    })

app.get('/cats', (req, res) => {
    Cat.find()
        .then((cats) => res.send(cats))
        .catch((err) => console.log(err));
})

app.get('/cats/:id', (req, res) => {
    Cat.findById(req.params.id)
        .then((cat) => res.send(cat))
        .catch((err) => console.log(err));
})
