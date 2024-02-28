const { RegisterService, LoginService } = require("../services/UserServices");



exports.Register = async( req, res) =>{

    const result = await RegisterService(req)
    res.status(200).json(result)

};




exports.Login = async(req, res) =>{
    const result = await LoginService(req);

    if(result['status']==="success"){
        // Cookies Option
        const cookieOption={expires:new Date(Date.now()+24*60*60*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token', result['token'], cookieOption)
        return res.status(200).json(result)

    }

    res.status(200).json(result)
    
};



exports.Logout = async(req, res) =>{
    
    // Cookies Option
    const cookieOption={expires:new Date(Date.now()-24*60*60*1000), httpOnly:false}

    // Set Cookies With Response
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})

}
