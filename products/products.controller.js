import categoryModel from '../models/categorys.model.js'
import productModel from '../models/products.model.js'
import { sendRsp } from '../utils/response.js'


export const createCategory = async (req, res) => {
    try {
        console.log(req.body)
        if (req.body.cat_name !== "" & req.body.cat_desc !== "") {
            const categoryCreated = await categoryModel.create(req.body)

            if (!categoryCreated) return sendRsp(res, 403, "Something went wrong");

            sendRsp(res, 200, "Category created successfully");
        }
    } catch(error) {
        console.log("error on category creation :: ", error)
          return sendRsp(res, 505, "Something went wrong");
    }
}

export const listCategories = async (req,res) =>{
     try {
        const listofCategory = await categoryModel.find().lean();
        sendRsp(res, 200, 'list of Category', listofCategory);
     } catch (error) {
        console.log(error)
     }
}

export const createProducts = async (req, res) => {

    try {
        const isProductCreate = await productModel.create(req.body)
        if(!isProductCreate) return  sendRsp(res, 203, "something went wronge");

            sendRsp(res, 200, "Product created successfully");
    } catch (error) {
        console.log(error)
        return  sendRsp(res, 500, "something went wronge");

    }
}


export const listProducts = async (req,res) =>{
     try {
        const listofProduct = await productModel.find().lean();
        sendRsp(res, 200, 'list of Products', listofProduct);
     } catch (error) {
        console.log(error)
     }
}