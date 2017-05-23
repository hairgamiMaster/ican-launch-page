$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  //Hide the custom amount field on the Ask->Donate form
  $('#customAmount').hide();

  //Builds out the data for the Preview Modal
  $('#previewMessage').click(function(){
    $('#salutation').text('Dear ' + $('#nameRecipient').val());
    $('#messageBodyPreview').html(htmlForTextWithEmbeddedNewlines($('textarea').val()));
    $('#valedictionPreview').text($('#valediction').val() + ',');
    $('#nameSenderPreview').text($('#nameSender').val());
  })

  //Shows and hides the Custom amount donation field
  $('input:radio[name="optionsRadios"]').change(
      function(){
        if ($(this).is(':checked')){
          if ($(this).val() == 'custom'){
            $('#customAmount').slideDown();
          } else {
            $('#customAmount').slideUp();
          }
        }
      });


  //http://jqueryvalidation.org/documentation/
  //Validation for Ask form
  $('#messageForm').validate({
    rules: {
      emailRecipient: {
        required: true,
        email: true
      },
      nameRecipient: {
        required: true,
        minlength: 3
      },
      valediction: {
        required: true,
        minlength: 2
      },
      emailSender: {
        required: true,
        email: true
      },
      nameSender: {
        required: true,
        minlength: 3
      },
      messageBody: {
        required: true
      }
    }
  });


  //Set the value of the gift recipient
  $('#giftRecipient').text("Kenny Barnes");


  //http://jqueryvalidation.org/documentation/
  //Validation for Ask->Donate form (the form someone fills out when they've been asked via email to donate by someone
  $('#ask-donationForm').validate({
    rules: {
      customAmount: {
        number: true
      },
        emailRecipient: {
        required: true,
        email: true
      },
      nameRecipient: {
        required: true,
        minlength: 3
      },
      nameSender: {
        required: true,
        minlength: 3
      },
      emailSender: {
        required: true,
        email: true
      }
    }
  })

  //This function is necessary to retain line breaks in the message.
  //http://stackoverflow.com/questions/4535888/jquery-text-and-newlines
  function htmlForTextWithEmbeddedNewlines(text) {
    var htmls = [];
    var lines = text.split(/\n/);
    var tmpDiv = jQuery(document.createElement('div'));
    for (var i = 0 ; i < lines.length ; i++) {
      htmls.push(tmpDiv.text(lines[i]).html());
    }
    return htmls.join("<br>");
  }
});



