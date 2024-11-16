import mongoose from "mongoose";
const catSchema = new mongoose.Schema({
    name: {type:String,required: true},
    description: String,
    number: Number,
    likes: Number,
    shares: Number,
    image: String,
    upvotes: Number,
    downvotes: Number
}, {timestamps: true}); 

export const Cat = mongoose.model('Cat', catSchema);
