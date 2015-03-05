$.navWindow.open();
 $.indexWindow.addEventListener('focus', getCities);

var db = Ti.Database.open('cityDatabase1');

//create table

db.execute('CREATE TABLE IF NOT EXISTS places(placeId INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT, state TEXT, query TEXT, thePlace TEXT, date TEXT)');


//when the add button is tapped



getCities(); 


 function getCities() {
	
	var results = [];
	var resultsSet = db.execute('SELECT placeId, thePlace, query, date FROM places ORDER BY date DESC');	
	
	while(resultsSet.isValidRow()) {
		results.push({
			
			placeId: resultsSet.fieldByName('placeId'),
			title: resultsSet.fieldByName('thePlace'),
			query: resultsSet.fieldByName('query'),
			date: resultsSet.fieldByName('date')
					});
					
					resultsSet.next();
	}
	
	resultsSet.close();
	
	$.citiesTableView.data = results;
}


var addButton = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.ADD
});


var editButton = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.EDIT
});


var doneButton = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.DONE
});


$.indexWindow.rightNavButton = addButton;
$.indexWindow.leftNavButton = editButton;


addButton.addEventListener('click', function(e){

var addWindow = Alloy.createController('add').getView();

$.navWindow.openWindow(addWindow);
	
});


editButton.addEventListener('click', function(e){

$.citiesTableView.editing = true;
$.indexWindow.leftNavButton = doneButton;

	
});


doneButton.addEventListener('click', function(e){
	$.citiesTableView.editing = false;
	$.indexWindow.leftNavButton = editButton;
	
});

$.citiesTableView.addEventListener('delete', function(e){
	
	db.execute('DELETE FROM places WHERE placeId=?', e.rowData.placeId);
});


$.citiesTableView.addEventListener('click', function(e) {
	
var detailsWindow = Alloy.createController('details', {query: e.row.query}).getView();
	detailsWindow.title = e.row.title;
	detailsWindow.backButtonTitle = 'Back';
	
	$.navWindow.openWindow(detailsWindow);
});


