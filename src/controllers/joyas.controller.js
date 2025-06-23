import HATEOAS from "../helpers/hateoas.js";
import { 
    getAllJoyasHateoasModel ,
    getPaginatedJoyasModel,
    getJoyasFilterModel
} from "../models/joyasModel.js";

export const getAllJoyasHateoas = async(req,res)=>{
    try {

        const {order_by,limit,page} = req.query
        const allJoyas= await getPaginatedJoyasModel({order_by,limit,page})
        const allJoyasWithHateoas = await HATEOAS('joyas',allJoyas)
        res.status(200).json({joyas: allJoyasWithHateoas });
    } catch (error) {
        console.log('error',error);
        res.status(500).json({error : error.message});
        console.log('Error al procesar la solicitud: ',error);
        
        
    }
}

export const getPaginatedJoyas = async(req,res)=>{
  try {
    const {order_by,limit,page} = req.query
    const joyas= await getPaginatedJoyasModel({order_by,limit,page})
    res.status(200).json({joyas})
  } catch (error) {
    res.status(500).json(error)
    console.error('Error =>',error)
  }
}

export const getJoyasFilter = async(req,res)=>{
  try {
    const filter = req.query
    const joyas= await getJoyasFilterModel(filter)
    res.status(200).json({joyas})
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
    
  }
}
