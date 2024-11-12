import { Schema, model } from 'mongoose';

const catSchema = new Schema({
    name: {type:String,required: true},
    description: String,
    number: Number,
    likes: Number,
    shares: Number,
    image: String,
    upvotes: Number,
    downvotes: Number
}, {timestamps: true}); 

export default model('Cat', catSchema);