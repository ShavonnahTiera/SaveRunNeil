// GET /dec/v1/navigation.position
/* Values: navigation, vehicleinfo, identity, media, etc. 
Namespace could also specify precisely the objects to be retrieved like in: navigation.destination
*/

let milesDriven = HTTP.call( 'GET', '/dec/v1/', {}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    console.log( response );
  }
});


let busRides = HTTP.call( 'POST', '/content/v1/commerce/getUserPurchases/msisdn:XXX', {
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
