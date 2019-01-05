var express = require('express');
var router = express.Router();
var login_check= require('../controllers/authManagement.js');
var role_definition = require('../controllers/roleDefinitionController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req,res,next) => {
  login_check.login(req.body,(err,result) => {
    role_definition.role_define(result.role, (role_can) => {
      res.render('roleCheck.ejs',{
        user_details:result,
        user_rights:role_can
      });
    })
   
   
  })
})

module.exports = router;
