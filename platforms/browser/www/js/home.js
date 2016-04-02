var helloApp = {};

helloApp.app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    // Write your jquery from here
    

    
    if(localStorage.users) {
    	var users = JSON.parse(localStorage.getItem("users"));
    	$("#user_firstname").text(users.firstname);
    }
},
	onDeviceReady: function() {
		FastClick.attach(document.body);
  }
};


