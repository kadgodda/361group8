var User = function(phrase){
	this.testPhrase = phrase;
};

User.prototype.test = function(){
	console.log("Test");
	return this.testPhrase;
};

module.exports = User;