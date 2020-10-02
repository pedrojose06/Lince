
$(function() {

    update = function() {
        
         var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
         console.log(name + " " + email + " " + message);
      
        $.ajax({
            url: "/update",
            type: "POST",
            data: {
                name: name,
                email: email,
                message: message
            },
            cache: false,
            success: function() {
                
                $('#alert').html("<div class='alert alert-success'>");
                $('#alert > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#alert > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
                $('#alert > .alert-success')
                    .append('</div>');
                $('#contactForm').trigger("reset");
                console.log("Success: message sent.")
            },
            error: function() {
                $('#alert').html("<div class='alert alert-danger'>");
                $('#alert > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#alert > .alert-danger').append("<strong>Sorry " + name + ", it seems that the server is not responding. Please try again later!");
                $('#alert > .alert-danger').append('</div>');
                $('#contactForm').trigger("reset");
                console.log("Server error, please try again later.")
            },
            complete: function() {
                console.log("Query completed.")}
        });
        return false;
                
    }
    
    $("form").submit(function() {
              update(); 
              return false;
              });
    
      //disables right-click menu on images
      $("img").on("contextmenu", function() {
        return false;
      });
      
    
      $("#owl-captions").owlCarousel({
    
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
      });
    
      $("#owl-team").owlCarousel({
    
        //autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    
      });
    
      $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
          window.location.hash = target;
        });
      });
    
    });
    

// (function($) { "use strict";

// $(function() {
//   var header = $(".start-style");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
  
//     if (scroll >= 10) {
//       header.removeClass('start-style').addClass("scroll-on");
//     } else {
//       header.removeClass("scroll-on").addClass('start-style');
//     }
//   });
// });		
  
// //Animation

// $(document).ready(function() {
//   $('body.hero-anime').removeClass('hero-anime');
// });

// //Menu On Hover
  
// $('body').on('mouseenter mouseleave','.nav-item',function(e){
//     if ($(window).width() > 750) {
//       var _d=$(e.target).closest('.nav-item');_d.addClass('show');
//       setTimeout(function(){
//       _d[_d.is(':hover')?'addClass':'removeClass']('show');
//       },1);
//     }
// });	

// //Switch light/dark

// $("#switch").on('click', function () {
//   if ($("body").hasClass("dark")) {
//     $("body").removeClass("dark");
//     $("#switch").removeClass("switched");
//   }
//   else {
//     $("body").addClass("dark");
//     $("#switch").addClass("switched");
//   }
// });  

// })(jQuery); 