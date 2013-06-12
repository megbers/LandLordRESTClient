steal("funcunit/qunit", "landlord/fixtures", "landlord/models/property.js", function(){
	module("Model: Landlord.Models.Property")
	
	test("findAll", function(){
		expect(4);
		stop();
		Landlord.Models.Property.findAll({}, function(properties){
			ok(properties)
	        ok(properties.length)
	        ok(properties[0].name)
	        ok(properties[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Landlord.Models.Property({name: "dry cleaning", description: "take to street corner"}).save(function(property){
			ok(property);
	        ok(property.id);
	        equals(property.name,"dry cleaning")
	        property.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Landlord.Models.Property({name: "cook dinner", description: "chicken"}).
	            save(function(property){
	            	equals(property.description,"chicken");
	        		property.update({description: "steak"},function(property){
	        			equals(property.description,"steak");
	        			property.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Landlord.Models.Property({name: "mow grass", description: "use riding mower"}).
	            destroy(function(property){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})