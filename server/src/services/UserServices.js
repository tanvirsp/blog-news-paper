const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const { EncodeToken } = require("../utility/TokenHelper");



exports.RegisterService =async(req) =>{
    try {
        const data = req.body;
        const userExit = await UserModel.findOne({email: data.email});

        //Checking User Already Exits
        if(userExit){
            return {status: "fail", data: "This email is already used"}
        };

        await UserModel.create(data);
        return {status:"success", message: "User Creted Successfully"};

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}




exports.LoginService =async(req) =>{
    try {
        const {email, password} = req. body;
        
        //Validate Request
        if(!email || !password){
         return {status:"fail", message: "Please Enter email and password"}
        };
 

        // Check if user exists
         const user = await UserModel.findOne({ email });
        
         
         if(!user){
             return {status:"fail", message: "User not found, please Signup"}
         };
 
         // User exists, check if password is correct
         const passwordIsCorrect = await bcrypt.compare(password, user.password);
 
 
         if( user && passwordIsCorrect){
             //Generate JWT token
             const token = EncodeToken(user.email, user._id.toString());
 
            return {status:"success", token: token}
   
         } else {
             return {status:"fail", message: "Invalid email or password"}
         }
 
 
 
     } catch (error) {
         return{status: "fail", data: error.toString}
     }
}