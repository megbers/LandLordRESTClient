//js landlord/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('landlord/landlord.html', {
		markdown : ['landlord']
	});
});