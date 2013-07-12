steal("funcunit/qunit", "landlord/fixtures", "landlord/models/person.js", function(){
	module("Model: Landlord.Models.Person")
	
	test("findAll", function(){
		expect(4);
		stop();
		Landlord.Models.Person.findAll({}, function(people){
			ok(people)
	        ok(people.length)
	        ok(people[0].name)
	        ok(people[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Landlord.Models.Person({name: "dry cleaning", description: "take to street corner"}).save(function(person){
			ok(person);
	        ok(person.id);
	        equals(person.name,"dry cleaning")
	        person.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Landlord.Models.Person({name: "cook dinner", description: "chicken"}).
	            save(function(person){
	            	equals(person.description,"chicken");
	        		person.update({description: "steak"},function(person){
	        			equals(person.description,"steak");
	        			person.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Landlord.Models.Person({name: "mow grass", description: "use riding mower"}).
	            destroy(function(person){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})