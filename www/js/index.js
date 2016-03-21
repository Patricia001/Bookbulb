var helloApp = {};

helloApp.app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    // Write your jquery from here
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
    
    // Sign Up Functionality
    $("#signupForm").on("submit",function(event) {
    	event.preventDefault();
    	var formData = $(this).serializeArray();
    	var email = $("#email").val();
    	var password = $("#password").val();
    	var firstname = $("#firstname").val();
    	var lastname = $("#lastname").val();
    	var users = {};
    	if (email && password && firstname && lastname) {
    		users.id = 1;
    		users.email = email;
    		users.password = password;
    		users.firstname = firstname;
    		users.lastname = lastname;
    		window.localStorage.setItem("users", JSON.stringify(users));
    		window.location.href = "home.html";
 //   		window.location.href="#home";
    	} else {
    		alert("Please fill out all the form fields");
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
