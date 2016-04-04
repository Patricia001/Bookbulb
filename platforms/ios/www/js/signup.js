var helloApp = {};

helloApp.app = {
	initialize: function() {
		var self = this;
		document.addEventListener('deviceready', this.onDeviceReady, false);
		
		    $("#signupForm").on("submit", function(event) {
    	event.preventDefault();
    	var email = $("#email").val();
    	var password = $("#password").val();
    	var firstname = $("#firstname").val();
    	if (email && password && firstname) {
    		email = email.replace(".","");
    		var ref = new Firebase("https://bookbulbtheapp.firebaseio.com/users/" + email);
    		var onComplete = function(error) {
    			if (error) {
    				alert(error);
    			} else {
    				alert("Thanks for signing up!");
    				$(location).attr("href", "www.google.com");
    			}	
    		};
			ref.set({email: email, password: password, firstname: firstname}, onComplete);
    	} else {
    		alert("Please fill out all the form fields");
    	}
    });
	},

	onDeviceReady: function() {
	
	}
};

helloApp.app.initialize();