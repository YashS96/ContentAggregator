// import UserIdentity from "../model/user-identity";
// import User from "../model/user.js"
// import crypto from 'crypto'
// import jwt from "jsonwebtoken"

// export const userLogin = async (req, res) => {
//     let userName = req.body.username;
//     let password = req.body.password;
//     try{
//         let user = await UserIdentity.findOne({username : userName});
//         if(user){
            
//             let saltedUserPassword = crypto.sha256(password + user.salt); // SaltedHash = sha256(txt-pass + random-string)
//             let saltedStoredpassword = user.password;

//             if(saltedStoredpassword === saltedUserPassword)
//                 res.status(200).json(`Login Successful!!`); //res.redirect('/dashboard')
//             else
//                 res.status(401).json(`Incorrect username or password.`);    
//         }
//         else
//             res.status(401).json(`User not found!!`)

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json(`Oops!!`)
//     }
// }

// export const userRegistration = async (req, res) => {
//     try{
//     let salt = crypto.randomBytes(64).toString('hex');
//     let saltedPassword = crypto.sha256(req.body.password +salt);
    
//     let userIdentityBody = {
//             username : req.body.username,
//             password : saltedPassword,
//             salt     : salt
//         }
//     let userBody = {
//         username : req.body.username,
//         firstName : req.body.firstname,
//         lastName : req.body.lastName,
//         dob : req.body.dob,
//         email : req.body.email
//     }
//     let user = new User(userBody)
//     let userIdentity = new UserIdentity(userIdentityBody)
    

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json(`Oops!!`)   
//     }
// }



// // base64:
// // const hash = crypto.createHash('sha256').update(pwd).digest('base64');
// // hex:
// // crypto.createHash('sha256').update(pwd).digest('hex');