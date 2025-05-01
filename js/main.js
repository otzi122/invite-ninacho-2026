$(function(){

	countDown("May 21, 2022 15:00:00", "Ha finalizado!");

    var parallaxOne = new Parallax( document.getElementById('parallax') );

	$('.next-btn').click(function(event) {
		$('.next-btn').off('click');
		event.preventDefault();

		$('#background').animate({left: '-=100%'});
		$('#parallax').animate({left: '-=100%'});
		$('.page.active').addClass('anim');
		$('#main').addClass('next');
		$('.page').delay(2000).animate({left: '-=100%'});
	});

	$('#loader').fadeOut('fast');
});

function countDown( $date , $text ){
		
		var countDownDate = new Date( $date ).getTime();

		var x = setInterval(function() {

			var now = new Date().getTime();
			var distance = countDownDate - now;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
	   + minutes + "m " + seconds + "s ";

	   if (distance < 0) {
	   	clearInterval(x);
	   	document.getElementById("countdown").innerHTML = $text;
	   }
	}, 1000);

}

function getReady(){
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
