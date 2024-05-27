import UserAuthenticationModel from "../../model/user/index.js";
import jwt from 'jsonwebtoken';
import {compare, hash} from 'bcrypt';
const PASS = process.env.SECRET_KEY
const UserAuthenticationController = {
  SignUp: async (req, res) => {
    try {
      const payload = req.body;
      const checkPost = await UserAuthenticationModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if(checkPost) {
        res.status(401).json({message: "Already exist"})
      }
      //hashing
      const hpassword = await hash(payload.password,10)
      const data = await UserAuthenticationModel.create({
        Name : payload.Name,
        email: payload.email,
        // password : payload.password,
        password : hpassword,
        phoneNo : payload.phoneNo
      })
      res.status(200).json({message: "Registered successfully", data})
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Internal server error" });
    }
  },

  SignIn : async(req,res)=> {
    try {

        const payload = req.body;
        const checkPost = await UserAuthenticationModel.findOne({
          where: {
            email: payload.email,
          },
        });
        if(!checkPost) {
          res.status(401).json({message: "Invalid confirmations"})
        }
        const comparePassword = compare(
            payload.password , checkPost.password
        )
        if(!comparePassword){
            res.status(400).json({message: "Invalid confirmations"})  
        }
      
        const tokenData = {
            id : checkPost.id,
            email : checkPost.email,
            password : checkPost.password
        }
          //jwt
          const pass = jwt.sign(tokenData, PASS,{
            expiresIn : "1h"
          })
        res.status(200).json({message: tokenData,pass})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
  }
};

export default UserAuthenticationController;
