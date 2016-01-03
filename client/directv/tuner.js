Meteor.startup(function () {
    if (!!navigator.setResolution) {
          navigator.setResolution(1280, 720);
    }

    //Disable websecutiry to bypass CORS issues if any.
    if (!!navigator.setWebSecurityEnabled){
        navigator.setWebSecurityEnabled(false);
    }
});	

/* == Meteor http request
http://STBIP:port/tv/tune?major=num[&minor=num][&clientAddr=string]
*/
// let ip = "STB_IP" // REPLACE WITH STB_IP
// 	, baseUrl = "http://"+ip+":8080"

Template.hello.events({
    'click button': function () {
      // REPLACE WITH STB_IP
			let tuneNGeo = HTTP.call( 'GET', 'http://10.10.60.64:8080/tv/tune?', {
			  params: {
			    "major": 276
			  }
			}, function( error, response ) {
			  if ( error ) {
			    console.log( error );
			  } else {
			    console.log( response );
			  }
			});
    }
  });
