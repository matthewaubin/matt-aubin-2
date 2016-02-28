$(document).ready(function() {
  $("#contact-form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/myemail@gmail.com",
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          message: $(form).find("input[name='message']").val(),
          email: $(form).find("textarea[name='email']").val()
        },
        dataType: "json",
        success: function() {
          $("#contact-form").fadeOut();
          $("#success").fadeIn;
        },
        error: function() {
          $("#error").fadeIn;
        }
      });
    }
  } // end .validate
});
