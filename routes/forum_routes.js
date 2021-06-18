const { verify_jwt } = require('../helper/verify_jwt');
var forumController=require('../controller/forum_controller');
const router = require('express-promise-router')();

router.route("/question").get(verify_jwt(),forumController.get_question);
router.route("/question").post(verify_jwt(),forumController.get_your_question);
router.route("/question/answer/:question_id").get(verify_jwt(),forumController.get_answer);
module.exports=router;