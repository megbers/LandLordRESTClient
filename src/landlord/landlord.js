steal(
	'./landlord.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	//'./fixtures/fixtures.js',	// sets up fixtures for your models
	'landlord/user/create',
	'landlord/user/list',
	'landlord/property/create',
	'landlord/property/list',
	function(){					// configure your application
		
		//$('#users').landlord_user_list();
		//$('#create').landlord_user_create();
	    $('#properties').landlord_property_list();
		$('#createProperty').landlord_property_create();
})