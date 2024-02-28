const jwt=require('jsonwebtoken');

exports.EncodeToken=(email,user_id)=>{
    const KEY="123-ABC-XYZ";
    const EXPIRE={expiresIn: '24h'}
    const PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}




exports.DecodeToken=(token)=>{
    try {
        const KEY="123-ABC-XYZ";
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}