import categoryModel from '../models/categorys.model.js'
import { sendRsp } from '../utils/response.js'

export const listProducts = (req, res) => {
    res.send(`
    <ul>
    <li>Sony</li>
    <li>HP</li>
    <li>Dell</li>
    </ul>`)
}

export const createCategory = async(req,res) =>{
    console.log(req.body)
    if(req.body.cat_name !=="" & req.body.cat_desc !== ""){
        const categoryCreated = await categoryModel.create(req.body) 

        if(!categoryCreated) return sendRsp(res, 403, "Something went wrong");

            sendRsp(res, 200, "Category created successfully");
    }
}