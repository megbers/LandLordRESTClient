steal(
	'./landlord.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	//'./fixtures/fixtures.js',	// sets up fixtures for your models
	'landlord/user/create',
	'landlord/user/list',
	'landlord/property/create',
	'landlord/property/list',
	'landlord/person/create',
	'landlord/person/list',
	'landlord/expense/create',
	'landlord/expense/list',
    'landlord/property/show/show_property.js',
	function(){					// configure your application
		
//		$('#users').landlord_user_list();
//		$('#createUser').landlord_user_create();
//	    $('#properties').landlord_property_list();
//		$('#createProperty').landlord_property_create();
//	    $('#people').landlord_person_list();
//		$('#createPerson').landlord_person_create();
//	    $('#expenses').landlord_expense_list();
//		$('#createExpense').landlord_expense_create();

        $('#applicationContainer').landlord_property_list();
})