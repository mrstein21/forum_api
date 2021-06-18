const router = require('express-promise-router')();
const userController= require('../controller/user_controller');

router.route("/login").post(userController.login);
router.route("/register").post(userController.register);

module.exports=router;
