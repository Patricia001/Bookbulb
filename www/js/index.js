var helloApp = {};

helloApp.app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		//alert("hello");
    // Write your jquery from here
    var myDataRef = new Firebase('https://bookbulbtheapp.firebaseio.com/');
    var userRef = myDataRef.child("users");
		
	function checkIfUserExists(email) {
		var usersRef = new Firebase(USERS_LOCATION);
		usersRef.child(email).once('value',function(snapshot) {
			var exists = (snapshot.val() !== null);
			userExistsCallback(userId, exists);
		});
	}
	
	function checkIfEmailExists(email,exists) {
		if(!exists) {
			alert(email + 'does not exist');
		}
	}

    
    $("#login").on("click",function(event) {
    //alert("hello login");
    		var email = $("#email").val();
    		//email= email.replace(".",""); //firebase email
    		var password = $("#password").val();
    	if (email && password){
            // console.log(">>>email>>password>>>", email, password);
            // var ref = new Firebase("https://bookbulbtheapp.firebaseio.com/users/" + email); //making call to Firebase API w/ specific email id entered by user
            // ref.once("value",function(snap){
            // //alert(snap.firstname);
            // console.log(snap.key());
			// console.log(snap.val());

			var ref = new Firebase("https://bookbulbtheapp.firebaseio.com");
			ref.authWithPassword({
				email    : email,
				password : password
			}, function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					window.location.href = "home.html";
					console.log("Authenticated successfully with payload:", authData);
				}
			});

			// ref.authWithPassword(
			// 	{
  			// 		email    :  email,
  			// 		password :  password
			// 	},
			// 	function(error, authData) {
  			// 		if (error) {  //TODO ask teacher why failed.
  			// 		             //treat as success, go to home page
    			// 		//alert("User name and password are incorrect");
    			// 		console.log("Login Failed!", error);
    			// 		window.location.href = "home.html";
    			//
  			// 	} else {
    			//     console.log("Authenticated successfully with payload:", authData);
    			//     window.location.href = "home.html";
  			// 	}
			// );
			    		
    	} else {
			alert("Please enter both username and password");
        }
    });
},
	onDeviceReady: function() {
		FastClick.attach(document.body);
  }
};
helloApp.app.initialize();