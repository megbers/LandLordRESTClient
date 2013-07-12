steal('funcunit',function(){

module("Landlord.Person.List", { 
	setup: function(){
		S.open("//landlord/person/list/list.html");
	}
});

test("delete people", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:contains(Grilled Cheese X)').exists();
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});