// alert('Do you want to open details about silvermountain paraguliding???')
$(document).ready(function(){
	//****************for showing hidden cloudBuster file click on section
	 $('.cloudBuster').click(function(){
		$('.cloud_buster').show(500);
		 });
		 
		 //***************for showing hidden crossCountry file click on section
		 $('.crossCountry').click(function(){
			 $('.cross_country').show(500);
		 });
		 
		 //***************for showing hidden acrobAtics file click on section
		 $('.acrobAtics').click(function(){
			 $('.acrob-atics').show(500);
		 });
		 
		 //***************for showing hidden hikeAndFly file click on section
		 $('.hikeAndFly').click(function(){
			 $('.hike_and_fly').show(500);
		 });
		 
		 //*************closes all the showed button while click on "X" button
	 $('.closes').click(function(){
	 $('.hiddenFile').hide(500);
		 });
	});
	
			
