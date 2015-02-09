

function report(e) {
    Ti.API.info('User selected: ' + e.value);
}


function calc(e) {
	
	 var name = $.textField.value; 

 
 
  var today = new Date();
    var theDate = $.picker.value;
    var d1 = Date.parse(today);
    var d2 = Date.parse(theDate);
    var d = d2 - d1;
 	var numdays = Math.ceil(d / (86400000));
 	 Ti.API.info(numdays); 
 	
 	
 		if(numdays == 0)
 		
 		{
 			
 			$.result.setText(name + " is today! "); 
 			
 		}
 		
 		else if(numdays == 1) {
 			
 			 $.result.setText(name + " will happen tomorrow" ); 
 			
 			
 		}
 		
 		
 			else if(numdays == -1) {
 			
 			 $.result.setText(name + " happened yesterday" ); 
 			
 			
 		}
 		
 		
 		else if(numdays < 0) {
 			
 			var pastnum = Math.abs(numdays);
 		$.result.setText(name + " happened " + pastnum + " days ago"); 
 			
 		}
 		
 		
 		else if (numdays > 0) {
 			
 			 $.result.setText(name + " will happen in " + numdays + " days"); 
 			
 		}
 		
 	
 		
 		
 
 	
}

$.index.open();
