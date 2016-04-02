var helloApp = {};

helloApp.app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    // Write your jquery from here
    var myDataRef = new Firebase('https://bookbulbtheapp.firebaseio.com/');
    var userRef = myDataRef.child("users");
    $('#take_picture').on('click', function(event) {
      alert("camera is not active right now");
      /*if (!navigator.camera) {
        alert("Camera API not supported", "Error");
        return;
      }
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 0     // 0=JPG 1=PNG
      }; */
    });
   
    var botMessage = ["Hi, how can I help you", "No one available", "Sorry you are struggling"];
    
    $('#send_question').on('click',function(event) {
    var itemFromBot = botMessage[Math.floower(Math.random()*botMessage.length)];
    	var textMessage = $('#question_message').val();
    	if(textMessage.length) {
    		$('#received_messages').append('<p>'+textMessage) + '</p>';
    		$('#received_messages p').last('p').append('<br>'+botMessage.random[itemFromBot] + '</br>');
    	} else {
    		alert("please type your message");
    	}
    });
    
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
    
    /*
    $("#signup").on("click",function(event) {
    	alert("Signup Button clicked");
    });
    */
    
    // Sign Up Functionality
    $("#signupForm").on("submit",function(event) {
    	event.preventDefault();
        var formData = $(this).serializeArray();
    	var email = $("#email").val();
    	var password = $("#password").val();
    	var firstname = $("#firstname").val();
    	var users = {};
    	if (email && password && firstname) {
    		email = email.replace(".","");
    		var ref = new Firebase("https://bookbulbtheapp.firebaseio.com/users/" + email);
			ref.push({email: email, password: password, firstname: firstname});
    		window.location.href = "home.html";
    	} else {
    		alert("Please fill out all the form fields");
    	}
    });
    
    $("#login").on("click",function(event) {
    		var email = $("#email").val();
    		//email= email.replace(".",""); //firebase email
    		var password = $("#password").val();
    	if (email && password){
            console.log(">>>email>>password>>>", email, password);
    		var ref = new Firebase("https://bookbulbtheapp.firebaseio.com/users/" + email); //making call to Firebase API w/ specific email id entered by user
    		ref.once("value",function(snap){
    		//alert(snap.firstname);
    		console.log(snap.key());
			console.log(snap.val());
			    		
			
			var ref = new Firebase("https://bookbulbtheapp.firebaseio.com");
			ref.authWithPassword({
  					email    :  email,
  					password :  password
				}, function(error, authData) {
  					if (error) {  //TODO ask teacher why failed. 
  					             //treat as success, go to home page
    					//alert("User name and password are incorrect");
    					console.log("Login Failed!", error);
    					window.location.href = "home.html";
    					
  				} else {
    			    console.log("Authenticated successfully with payload:", authData);
    			    window.location.href = "home.html";
  				}
			});    		
			    		
    	});
    } else {
    	window.location.href = "signup.html";
    }
    	
    });
    
    
    if(localStorage.users) {
    	var users = JSON.parse(localStorage.getItems("users"));
    	alert(users.firstname);
    }
},
	onDeviceReady: function() {
		FastClick.attach(document.body);
  }
};
