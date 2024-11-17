import express from 'express'
const router=express.Router();

import {Cat} from '../models/Cat.js'

router.get('/', async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.status(200).json({
            count: cats.length,
            data: cats
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }

})
router.post('/add', (req, res) => {
    try {
        if (!req.body.name) res.status(400).send("Please enter cat's name");
        else {
            const cat = new Cat({
                name: req.body.name,
                description: req.body.description || "meow"
            })
            cat.save()
                .then((cat) => res.send(cat))
                .catch((err) => console.log(err));
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const idCat = await Cat.findById(req.params.id);
//         if(idCat)   res.status(200).json(idCat);
//         else res.status(404).json({message:"Cat not found"})
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send(error.message)
//     }

// })

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name) res.status(400).send("Please enter cat's name");

        const result = await Cat.findByIdAndUpdate(req.params.id, req.body);
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send({ message: "no cat like tat" })
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const result = await Cat.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "cat not found" })
        }
        return res.status(200).json({ message: "deleted meow :(" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

export default router;