



$(document).ready(function(){

	$('#navigation a, #fidexbar a').on('click', function(e){
		e.preventDefault();
	}

	$(window).on('scroll', function(){
		var scrolltop = $(this).scrollTop();

		if(scrolltop >=215){
			$('#fixedbar').fadeIn(250);
		}
		else{
			$('#fixedbar').fadeOut(250);
		}
	});
});