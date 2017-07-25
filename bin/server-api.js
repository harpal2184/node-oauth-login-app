var User = require('../models/user');
var config = require('./config');

module.exports = function(app, express){
	var api = express.Router();
	api.port('/signup',function(req,res){
		var user = new User({
			name:req.body.name,
			username:req.body.username,
			password:req.body.password
		});
		user.save(function(err){
			if(err){
				res.send(err);
				return;
			}
			res.json({message:'User is created'});
		});
	});
	api.get('/users',function(req,res){
		User.find({},function(req,users){
			if(err){
				res.send(err);
				return;
			}
			res.json(users);
		});
	});
	return api
}