var jwt=require('jsonwebtoken');

module.exports={
    verify_jwt:function(){
        return (req,res,next)=>{
            const bearer=req.headers.authorization;
            if(typeof bearer!='undefined'){
              const result=bearer.split(' ');
              const token=result[1];
              jwt.verify(token,'secretkey',(err,authData)=>{
                if(err){
                 return res.status(500).send('Wrong Token'); 
               }
               else{
                req.data=authData;
                next();
              }
              });
            }
            else{
              return res.status(403).send('Forbidden');
            }
        }
    },
}