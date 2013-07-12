// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("user", 10, function(i, user){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			email: "user "+i,
			password: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("property", 5, function(i, property){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "property "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("person", 5, function(i, person){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "person "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
	$.fixture.make("expense", 5, function(i, expense){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "expense "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})