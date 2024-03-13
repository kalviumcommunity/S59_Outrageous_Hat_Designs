const mongoose=require('mongoose');
const crypto=require('crypto')

const userSchema= new mongoose.Schema({
    Email: {
        type: String,
    },
    Password: {
        type: String,
    }
});

userSchema.methods.setPassword = function (Password) {
    this.Password = crypto.createHash("sha512").update(Password).digest("hex"); 
};
  
  
userSchema.methods.validatePassword = function (Password) {
    const hash = crypto.createHash("sha512").update(Password).digest("hex");
    return this.Password === hash; 
};
  
  

const User = mongoose.model('user',userSchema);

module.exports=User;

