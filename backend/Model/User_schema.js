const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    Email: {
        type: String,
    },
    Password: {
        type: String,
    }
});

const Hat = mongoose.model('user',userSchema);

module.exports=Hat;