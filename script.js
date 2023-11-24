$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.portfolio .image-container .box').show('400')
    }else{
      $('.portfolio .image-container .box').not('.'+filter).hide('200');
      $('.portfolio .image-container .box').filter('.'+filter).show('400');
    }

  });

  // $('#theme-toggler').click(function(){
  //   $(this).toggleClass('fa-sun');
  //   $('body').toggleClass('dark-theme');
  // });


  // Get the button and body elements
const button = document.querySelector('#theme-toggler');
const body = document.querySelector('body');

// Check if the user has set a preference before
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

// Add an event listener to the button
button.addEventListener('click', () => {
  // Toggle the dark-theme class on the body element
  body.classList.toggle('dark-theme');
  
  // Check if the body element has the dark-theme class
  if (body.classList.contains('dark-theme')) {
    // Set the theme preference to dark in localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    // Remove the theme preference from localStorage
    localStorage.removeItem('theme');
  }
});


  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});