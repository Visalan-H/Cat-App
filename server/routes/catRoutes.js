import express from 'express'
const router = express.Router();
import multer from 'multer'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be saved
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Ensure unique file names
    },
});

const upload = multer({ storage });

import { Cat } from '../models/Cat.js'

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
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        const cat = new Cat({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            email: req.body.email,
        });

        await cat.save();
        res.status(201).json(cat);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

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