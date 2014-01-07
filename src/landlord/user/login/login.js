steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'landlord/models' )
    .then('./views/login.ejs', function($){

        /**
         * @class Landlord.User.Login
         * @parent index
         * @inherits jQuery.Controller
         * Creates users
         */
        $.Controller('Landlord.User.Login',
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update : function() {
                    this.element.html(this.view('//landlord/user/login/views/login.ejs'));
                },

                '#loginUser click' : function(element, event) {
                    Landlord.Models.User.login({email: $('#username').val(), password: $('#password').val()}, this.proxy(this.handleLogin));
                },

                handleLogin: function(user) {
                    //TODO Need to set the cookie
                    // Set the username and password to local storage so we dont need to ask the user again
                    if(user.valid) {
                        window.location.hash = "#!main";
                    } else {
                        alert("Login Failed");
                    }
                }
            })

    });