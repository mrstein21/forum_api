var knex=require("../config/config");
var bcrypt=require("bcryptjs");

module.exports={
    login: async function(email,password){
        var data=await knex('users').where({email : email});
        if(data==null){
            return null;
        }
        var account={
            id:data[0].id,
            email : data[0].email,
            name  : data[0].name,
          }
          data[0].password = data[0].password.replace('$2y$', '$2a$');
          var compare=bcrypt.compareSync(password,data[0].password);
          if(compare==true){
              return account;
          }
         return null;
     },
     register:async function(user){
        var check=await knex("users").where("email",user.email);
        console.log(check);
        if(check.length>0){
           return null
        }
         var data=await knex("users").insert(user);
         var user=await knex("users").where("id",data[0]);
         var result={
             id:user[0].id,
             name:user[0].name,
             email:user[0].email,
         }
         return result;
       },
}