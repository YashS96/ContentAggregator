import mongoose from 'mongoose'

let UserSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },
    firstNmae : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    favourites : Object,
    
    categories : Object,

    source : Object
});

let User = mongoose.model('User', UserSchema);

export default User;