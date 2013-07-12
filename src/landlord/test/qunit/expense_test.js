steal("funcunit/qunit", "landlord/fixtures", "landlord/models/expense.js", function(){
	module("Model: Landlord.Models.Expense")
	
	test("findAll", function(){
		expect(4);
		stop();
		Landlord.Models.Expense.findAll({}, function(expenses){
			ok(expenses)
	        ok(expenses.length)
	        ok(expenses[0].name)
	        ok(expenses[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Landlord.Models.Expense({name: "dry cleaning", description: "take to street corner"}).save(function(expense){
			ok(expense);
	        ok(expense.id);
	        equals(expense.name,"dry cleaning")
	        expense.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Landlord.Models.Expense({name: "cook dinner", description: "chicken"}).
	            save(function(expense){
	            	equals(expense.description,"chicken");
	        		expense.update({description: "steak"},function(expense){
	        			equals(expense.description,"steak");
	        			expense.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Landlord.Models.Expense({name: "mow grass", description: "use riding mower"}).
	            destroy(function(expense){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})