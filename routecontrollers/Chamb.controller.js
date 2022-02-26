const Chamb = require("../models/Chamb");

// exports.bookchambre = async(req,res)=>{
//     const userId = req.params.userId
//     const roomId = req.params.roomId
//     try {
//         const room = await Chamb.findById(roomId)
//     } catch (error) {
//         res.status(500).json({errors:error.message})
//     }
// }


exports.getchambre=async(req,res)=>{
    try {
        const chambres= await Chamb.find() ;
        res.send(chambres)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
};
exports.getonechambre=async(req,res)=>{
    try {
        const chambr = await Chamb.findById(req.params.id);
        res.send(chambr);
      } catch (error) {
        res.status(500).json({errors: error.message});
      }
};
exports.addchambre=async(req,res)=>{
    const {price,title,type,confort,description,imageUrl}=req.body
    try {
        const newchambre=  new Chamb({
            price,title,type,confort,description,imageUrl
        });
        await newchambre.save();
        res.send(newchambre)
    } catch (error) {
        res.status(500).json({errors: error.message});
        // console.log(error);

    }
}
exports.deletechambre=async(res,req)=>{
    try {
        const deletedchambre= await Chamb.findByIdAndDelete(req.params.id);
        res.send({msg:`${deletedchambre.title} deleted`})
    } catch (error) {
        // res.status(500).json({errors: error.message});
        console.log(error);
    }
};
exports.editchambre=async(res,req)=>{
    try {
        const editedchambre = await Chamb.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editedchambre)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}