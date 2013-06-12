steal("funcunit", function(){
	module("landlord test", { 
		setup: function(){
			S.open("//landlord/landlord.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})