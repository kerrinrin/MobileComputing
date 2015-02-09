

function rgb2hex(red,green,blue)
{
	return "#" +
		("0" + parseInt(red,10).toString(16)).slice(-2) +
		("0" + parseInt(green,10).toString(16)).slice(-2) +
		("0" + parseInt(blue,10).toString(16)).slice(-2);
		
		
}





function changeColor (e) {
	var color = rgb2hex($.RedSlider.value, $.GreenSlider.value, $.BlueSlider.value );
	$.indexWindow.backgroundColor = color;
	Ti.API.info(color);
	$.hex.setText('The hex color is ' + color);
}






$.indexWindow.open();
