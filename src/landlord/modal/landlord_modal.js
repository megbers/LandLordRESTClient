
steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view')
    .then('./modal.css', function() {
        $.Controller("Landlord.Modal",{
            init : function(){
                this.element.html(this.options.passedInView);
                this.element.show();
            },
            "a click" : function(a, ev){
                this.element.hide();
                this.options[a.attr('id')](ev);

                this.destroy();
            }
        });
    });
