import mongoose from 'mongoose'

const UserIdentitySchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    }
    // needs a FK or unique username is enough ?
});

let UserIdentity = mongoose.model('UserIdentity', UserSchema);

export default UserIdentity;
