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
    'landlord/expense/show/show_expense.js',
    'landlord/expense/edit/edit_expense.js',
    'landlord/main_menu/mainMenu.js',
    'landlord/settings/settings.js',
    'landlord/header_menu/header.js',
    'landlord/tenant_screening/tenantScreening.js',
    'twitter/css/bootstrap.css',

    function(){					// configure your application

        $.ajaxSetup({
            processData : false
        });

        $.ajaxPrefilter( function(options) {
            if ((options.type === 'POST' || options.type === 'PUT') && typeof options.data != "string" ) {
                options.contentType = "application/json";
                options.data = JSON.stringify(options.data);
            } else if(options.data && typeof options.data != "string") {
                options.data = $.param( options.data, options.traditional );
            }
        });

//		$('#users').landlord_user_list();
//		$('#createUser').landlord_user_create();
//	    $('#properties').landlord_property_list();
//		$('#createProperty').landlord_property_create();
//	    $('#people').landlord_person_list();
//		$('#createPerson').landlord_person_create();
//	    $('#expenses').landlord_expense_list();
//		$('#createExpense').landlord_expense_create();
//      $('#applicationContainer').landlord_property_list();

        $('#headerMenuContainer').landlord_header_menu();
        $('#applicationContainer').landlord_main_menu();
})