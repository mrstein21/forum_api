var knex=require("../config/config");
module.exports={
    get_question:async function(){
      var list_forum=await knex("question")
      .join("users","question.user_id","=","users.id")
      .leftJoin("answer","answer.question_id","=","question.id")
      .select("question.id","question.title","question.date","users.name",
      knex.raw("count(answer.id) as total_answer")).groupBy("question.id").orderBy('question.date', 'desc')
      return list_forum;
    },
    get_your_question:async function(id){
      var list_forum=await knex("question")
      .join("users","question.user_id","=","users.id")
      .leftJoin("answer","answer.question_id","=","question.id")
      .select("question.id","question.title","question.date","users.name",
      knex.raw("count(answer.id) as total_answer")).where("question.user_id",id).groupBy("question.id");
      return list_forum;
    },
    add_question:async function(param){
      var data= await knex("question").insert(param); 
      var list_forum=await knex("question")
      .join("users","question.user_id","=","users.id")
      .leftJoin("answer","answer.question_id","=","question.id")
      .select("question.id","question.title","question.date","users.name",
      knex.raw("count(answer.id) as total_answer")).where("question.id",data[0]).groupBy("question.id").
      orderBy('question.date', 'desc')
      return list_forum;
    },
    add_answer:async function(params){
      var data= await knex("answer").insert(params); 
      var list_answer=await knex("answer")
      .join("users","answer.user_id","=","users.id")
      .select("answer.id","answer.answer","answer.date","users.name").
      where("answer.id",data[0]).orderBy('answer.date', 'desc')
      return list_answer;
    },
    get_answer:async function(question_id){
        var list_answer=knex("answer")
        .join("users","users.id","=","answer.user_id").
        select("answer.id","answer.answer","answer.date","users.name").
        where("answer.question_id",question_id).orderBy('answer.date', 'desc')
        return list_answer;
    }
}