const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    domain:{
        type:String,
        required:true,
    },
    github:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('Register', registerSchema);