
/*  mobile menu toggle */
$('.menu-btn').on('click', function(){
  if($(this).parents('body').is('.opened-menu') !== true) {
    $('body').addClass('opened-menu');
    $('.menu').addClass('opened');
  }
  else if($(this).parents('body').is('.opened-menu') === true){
    $('body').removeClass('opened-menu');
    $('.menu').removeClass('opened');
  }
});

/* Counters */
var $animation_elements = $('.dao__counter');
var $window = $(window);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
      $(this).prop('Counter', $(this).attr( "data-from" )).animate({
          Counter: $(this).attr( "data-to" )
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    } else {
      $element.removeClass('in-view');
    }
  });
}

 /* Scroll to top */
 $('#scrollTop').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 1000);
});

// Anchor scrolls
$(document).on('click', 'a.anchor', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/* Floating Box */
/* Common box status - visible */
if (!(localStorage.getItem('popupStatus'))) {
        localStorage.setItem('popupStatus', 'visible');
    }
/* Close click event */
$( document ).ready(function() {
    $("#floating_box_close").on("click", function() {
        console.log("closed!");
        localStorage.setItem('popupStatus', 'closed');
        $('#floating_box').hide();
    });
});
/* Hide box if it was closed previously */
if (localStorage.getItem('popupStatus') === 'closed') {
        $('#floating_box').hide();
    }

/* Show box if it was enabled previously */
if (localStorage.getItem('popupStatus') === 'visible') {
        jQuery('#floating_box').show();
    }
/*uncomment this line to show the box again*/
/*jQuery('#floating_box').show();*/

/* MODAL FORM */
$('.modal-form-toggle').on('click', function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

/* MODAL VIDEO */
$(".video-popup-btn").on('click', function(e) {
  e.preventDefault();
  $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();

  var srchref='',autoplay='',id=$(this).data('id');
  if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
  else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";

  if($(this).data('autoplay') == true) autoplay = '?autoplay=1';

  $("#video-popup-iframe").attr('src', srchref+id+autoplay);

  $("#video-popup-iframe").on('load', function() {
    $("#video-popup-container").show();
  });
});

$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
  $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
  $("#video-popup-iframe").attr('src', '');
});
