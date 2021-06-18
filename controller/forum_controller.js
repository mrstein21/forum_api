const { get_answer } = require('../repository/forum_repository');
var forumRepository=require('../repository/forum_repository');

module.exports={
    get_question:async(req,res,next)=>{
      try{
         var question=await forumRepository.get_question();
         return res.status(200).json({
            "success":true,
            "data":question,
        });
      }catch(e){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi kesalahan pada server !",
            "error":e.toString()
        });
      }
    },
    get_your_question:async(req,res,next)=>{
      try{
         var question=await forumRepository.get_your_question(req.body.user_id);
         return res.status(200).json({
            "success":true,
            "data":question,
        });
      }catch(e){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi kesalahan pada server !",
            "error":e.toString()
        });
      }
    },
    get_answer:async(req,res,next)=>{
        try{
          var answer=await forumRepository.get_answer(req.params.question_id);
          return res.status(200).json({
            "success":true,
            "data":answer,
        });
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
          }
    }
}