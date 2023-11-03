import { sendRsp } from "../utils/response.js";
import usersModel from "../models/users.model.js";
import { isEmailEixts } from './user.service.js';

export const userRegistration = async (req, res) => {
  try {
    console.log(req.body);

    const isEmailCheck = await isEmailEixts(req.body.email);

    if(isEmailCheck) return sendRsp(res, 409, "Email already taken", {}); 

    const userReg = await usersModel.create(req.body);

    if (!userReg) return sendRsp(res, 403, "Something went wrong");

    sendRsp(res, 200, "User Regsitered successfully");
  } catch (error) {
    console.log("userRegistration Error :: ", error);
    return sendRsp(res, 500, "Something went wrong", {});
  }
};

export const userList = (req, res) => {
  sendRsp(res, 200, "User Listed successfully");
};

export const userExistsCheck = async (req, res) => {
  try {
    const { email } = req.body;

    const isEmailCheck = await isEmailEixts(email);

    if(isEmailCheck) return sendRsp(res, 409, "Email already taken", {}); 

    sendRsp(res, 200, "Acount available for you", {});
  } catch (error) {
    console.log("userExistsCheck error :: ", error);
    return sendRsp(res, 500, "Something went wrong", {});
  }
};

export const userLogin = async (req, res) => {
    try {
        console.log('req.body', req.body);
        const { email, password } = req.body;

        const loginResult = await usersModel.findOne({email, password}, {password: 0, __v: 0}).lean();

        if(!loginResult) return sendRsp(res, 203, "Invalid Login");

        sendRsp(res, 200, 'User logged In', loginResult);
    } catch (error) {
        console.log("userLogin error :: ", error);
        return sendRsp(res, 500, "Something went wrong", {});
      }

}

export const userAccount = (req, res) => {

    sendRsp(res, 200, 'Account fecthed', {});
};
