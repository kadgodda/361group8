exports.Index = function(request, response){
	response.title = 'Hello World';
    response.render('home/Index');
};
 
exports.Other = function(request, response){
    response.title = 'Other';
    response.render('home/Other');
};
