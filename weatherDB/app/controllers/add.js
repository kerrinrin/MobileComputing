var args = arguments[0] || {};

var db = Ti.Database.open('cityDatabase1');

 $.addButton.addEventListener('click', function(e)
 {
 
// //if the textfield isn't empty
 
if($.cityTextField.value != '' && $.stateTextField.value != '' ) {
	
	var thePlace = $.cityTextField.value.charAt(0).toUpperCase()+$.cityTextField.value.slice(1) + ", " + $.stateTextField.value.toUpperCase();
	var cityQuery =  $.cityTextField.value.replace(" ", ",") + " " + $.stateTextField.value;
 	
	db.execute('INSERT INTO places (city, state, query, thePlace, date) VALUES(?,?,?,?,?)', $.cityTextField.value, $.stateTextField.value, cityQuery, thePlace, new Date());
	

 	
	 //clear textField
	 $.cityTextField.value = '';	
	 $.stateTextField.value = '';
	 $.addWindow.close();
	
 }

 });
