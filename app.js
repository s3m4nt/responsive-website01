$(document).ready(function() {
  
/* -----------------------------------------------
                MOBILE NAVIGATION     
-------------------------------------------------- */

  $(".burger-icon").on("click", function() {
	  if($( ".main-nav" ).hasClass( "mobile-hide" )){
		    $(".main-nav").removeClass("mobile-hide");
		    $(".main-nav").addClass("mobile-show");
	  }else{
		      $(".main-nav").addClass("mobile-hide");
		      $(".main-nav").removeClass("mobile-show");
	  }
  
  })

//   simple eventlistener w/ alert for subscribe button click

	const btn = document.querySelector('.subscribe')
	btn.addEventListener('click', (e) => {
		
		e.preventDefault()
		const email = document.getElementById('email').value 

		alert(`You've clicked the subscribe button using the email address: ${email}`)
	})

})




