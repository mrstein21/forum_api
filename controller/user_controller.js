const userReposotry = require('../repository/user_repository');
var jwt=require('jsonwebtoken');
var bcrypt=require("bcryptjs");


module.exports={
    login: async (req,res,next) => {
        try{
           var data= await userReposotry.login(req.body.email,req.body.password);
           if(data==null){
             return res.status(500).json({
                "success":false,
                "message":"Username atau Password salah",
             });
           }
           var token= jwt.sign(data,'secretkey');
           return res.status(200).json({
               "success":true,
               "data":data,
               "token":token
           });
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
        }
    },
    register:async(req,res,next)=>{
        try{
        var user={
            email:req.body.email,
            name:req.body.name,
            password: bcrypt.hashSync(req.body.password,8),
         }

          var data= await userReposotry.register(user);
          var token= jwt.sign(data,'secretkey');
          if(data==null){
            return res.status(500).json({
               "success":false,
               "message":"User sudah terdaftar",
            });
          }
          var token= jwt.sign(data,'secretkey');
          return res.status(200).json({
              "success":true,
              "data":data,
              "token":token
          });
          
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
        }
    },
}