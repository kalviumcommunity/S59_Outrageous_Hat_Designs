const mongoose=require('mongoose');

const hatSchema= new mongoose.Schema({
    HatID: {
        type: Number,
        required: true
    },
    HatName: {
        type: String,
        required: true
    },
    DesignerID: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    },
    Material: {
        type: String,
        required: true
    }
});

const Hat = mongoose.model('Hat',hatSchema);

module.exports=Hat;