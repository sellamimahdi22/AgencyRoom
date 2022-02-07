const AuthRole = (role)=>{
    return (req,res,next)=>{
        if(req.user.userRole!==role){
            res.status(401).json({errors: error.message});
        }
    }
    next()
}
module.exports=AuthRole;