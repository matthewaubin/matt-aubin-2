$(document).ready(function() {
  // $("#contact-form").validate({
  //   submitHandler: function(form) {
  //     $.ajax({
  //       url: "//formspree.io/myemail@gmail.com",
  //       method: "POST",
  //       data: {
  //         name: $(form).find("input[name='name']").val(),
  //         message: $(form).find("input[name='message']").val(),
  //         email: $(form).find("textarea[name='email']").val()
  //       },
  //       dataType: "json",
  //       success: function() {
  //         $("#contact-form").fadeOut();
  //         $("#success").fadeIn;
  //       },
  //       error: function() {
  //         $("#error").fadeIn;
  //       }
  //     });
  //   }
  // } // end .validate

  //Scroll-spy
  var controller = new ScrollMagic.Controller({loglevel: 3});

  var scene = new ScrollMagic.Scene({triggerElement: ".marquee-container", duration: 450})
    // animate color and top border in relation to scroll position
    .setTween("nav", {background-color: "#ffffff", box-shadow: "0 2px 8px 0 rgba(0,0,0,0.5),0 -5px 3px -10px #fff"}) // the tween durtion can be omitted and defaults to 1
    .addTo(controller);


});
