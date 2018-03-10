var User = function(phrase){
	this.testPhrase = phrase;
	this.passwordHash = "";
};

User.prototype.test = function(){
	console.log("Test");
	return this.testPhrase;
};

module.exports = User;