/* 	Author: Stacey Hart
	Desc: custom script for type size changer

*/

$(document).ready(function () {
	$('#smFont').hide();


	//min font size
	var min=14; 	

	//max font size
	var max=16;	
	
	//grab the default font size
	var reset = $('p').css('fontSize'); 
	
	//font resize these elements
	var elm = $('p.newstext');  
	
	//set the default font size and remove px from the value
	var size = str_replace(reset, 'px', ''); 
	
	//Increase font size
	$('a.fontSizePlus').click(function() {
		
		//if the font size is lower or equal than the max value
		if (size<=max) {
			
			//increase the size
			size++;
			
			//set the font size
			elm.css({'fontSize' : size});
				$('#lgFont').hide();
				$('#smFont').show();


		}
		
		//cancel a click event
		return false;	
		
	});

	$('a.fontSizeMinus').click(function() {

		//if the font size is greater or equal than min value
		if (size>=min) {
			
			//decrease the size
			size--;
			
			//set the font size
			elm.css({'fontSize' : size});
							$('#smFont').hide();
							$('#lgFont').show();


		}
		
		//cancel a click event
		return false;	
		
	});
	
	//Reset the font size
	$('a.fontReset').click(function () {
		
		//set the default font size	
		 elm.css({'fontSize' : reset});		
	});
		
});

//A string replace function
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}
