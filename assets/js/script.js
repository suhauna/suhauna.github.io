$(document).ready(function() {

  // QUESTION 6



  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
          $("#navbar").addClass("smaller");
          $("#navbar #logo").addClass("smaller");
          // $("#topbar #logo #at").addClass("smaller");
          // $("#topbar #logo #cal").addClass("smaller");
      
      } else {
          $("#navbar").removeClass("smaller");
          $("#navbar #logo").removeClass("smaller");
          // $("#topbar #logo #at").removeClass("smaller");
          // $("#topbar #logo #cal").removeClass("smaller");
      };


      if (scroll >= 1200) {
          $("#clips-section").addClass("small-background-image");
          // $("#clips-section").fadeIn("small-background-image");
      // } else {
        // $("#clips-section.small-background-image").removeClass("small-background-image");
      };

      if (scroll >= 500) {
        // $("#about-section_education" ).slideDown("slow");
        $("#about-section_education").animate({left: '250px'});
      //   $("#about-section_education").css({transform: 'translateX(-300px)'}, {transition: "1s"});
      // } else {
      //   $("#about-section_education").css({transform: 'translateX(300px)'}, {transition: "1s"});
      };



      // if (scroll >= 450) {
      //   $("#topbar.smaller").addClass("about");
      // } else {
      //   $("#topbar.smaller.about").removeClass("about");
      // };

      // if (scroll >= 850) {
      //   $("#topbar.smaller").addClass("staff");
      // } else {
      //   $("#topbar.smaller.staff").removeClass("staff");
      // };

      // if (scroll >= 2170) {
      //   $("#topbar.smaller").addClass("apply");
      // } else {
      //   $("#topbar.smaller.apply").removeClass("apply");
      // };

});

// random shit



// scroll-down




// scroll to section
$("a").click(function() {
  $("html, body").animate({
    scrollTop: $($.attr(this,"href")).offset().top
  }, 500);
  return false;
});

//toggling elements of about section to learn more

// $( ".about-section_description_reduced" ).hover(
//   function() {
//     $( ".about-section_description" ).slideDown( 1000, 
//       function() {
//         $( ".about-section_description_reduced" ).css( "visibility", "hidden" );
//         });
//   },
//   function() {
//     $( ".about-section_description" ).slideUp( 1000, 
//       function() {
//         $( "#about-section_description_reduced" ).css( "visibility", "visible" );
//         });
// });

$( "#about-education-reduced" ).hover(
  function() {
    $( "#about-education" ).slideDown( 1000, 
      function() {
        $( "#about-education-reduced" ).css( "visibility", "hidden" );
        });
  },
  function() {
    $( "#about-education" ).slideUp( 1000, 
      function() {
        $( "#about-education-reduced" ).css( "visibility", "visible" );
        });
});

$( "#about-experience-reduced" ).hover(
  function() {
    $( "#about-experience" ).slideDown( 1000, 
      function() {
        $( "#about-experience-reduced" ).css( "visibility", "hidden" );
        });
  },
  function() {
    $( "#about-experience" ).slideUp( 1000, 
      function() {
        $( "#about-experience-reduced" ).css( "visibility", "visible" );
        });
});


$( "#about-design-reduced" ).hover(
  function() {
    $( "#about-design" ).slideDown( 1000, 
      function() {
        $( "#about-design-reduced" ).css( "visibility", "hidden" );
        });
  },
  function() {
    $( "#about-design" ).slideUp( 1000, 
      function() {
        $( "#about-design-reduced" ).css( "visibility", "visible" );
        });
});

$( "#about-skills-reduced" ).hover(
  function() {
    $( "#about-skills" ).slideDown( 1000, 
      function() {
        $( "#about-skills-reduced" ).css( "visibility", "hidden" );
        });
  },
  function() {
    $( "#about-skills" ).slideUp( 1000, 
      function() {
        $( "#about-skills-reduced" ).css( "visibility", "visible" );
        });
});





 //Implement clip details when hover
$(".clips-item").hover(
    
    function() {
      // $(".clips-item").not(this).addClass("dim_other_clips");
      // $(".clips-headline").css("opacity", "0");
      $(".clips-item").not(this).css("opacity", .3);
      // $("clips_image").not(this)addClass("desaturate");

    },
    function() {
      // $(".clips-item").not(this).removeClass("dim_other_clips");
      // $("#bio-sample").css("opacity", 1);
      $(".clips-item").not(this).css("opacity", 1);
    }

    // function() {
    //   previousLink = $(this).attr("src");
    //   $(".clips_image").(this).attr("src", "http://img00.deviantart.net/fbf8/i/2013/205/8/6/aww____so_cute____by_nicksfluffyshit-d6eyttf.jpg");
    //    }, function() {
    //   $(".clips_image").(this).attr("src", previousLink);
    // }
    
  );



// alert when tries to submit contact info

$("#contact-button-container").click(function() {
    alert("To contact Suhauna, shoot her an email at suhauna@gmail.com");
  });

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

  $('#sidebar-button').click(function () {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
    }
  });

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  $('.page-wrapper').click(function () {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } 
  });



  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
    $('#carousel-next').click(function() {
      var nextvalue = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (nextvalue == -3840) {
        return false;
      } else {
        nextvalue -= 960;
        $('#carousel').css('margin-left', nextvalue);
      }

    });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $('#carousel-prev').click(function() {
      var prevalue = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (prevalue == 0) {
        return false;
      } else {
        prevalue += 960;
        $('#carousel').css('margin-left', prevalue);
      }

    });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});