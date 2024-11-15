const mongoose = require('mongoose')

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

// export default model('Cat', catSchema);
const Cat=mongoose.model('cat',catSchema);
module.exports=Cat;