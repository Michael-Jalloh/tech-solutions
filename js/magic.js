
var show = function(id) {
  document.getElementById(id).style.display = 'block';
  return false;

}

var hide = function(id) {
  document.getElementById(id).style.display = 'none';
  return false;
}

// magic.js
$(document).ready(function() {


    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'msg'    : $('textarea[name=message]').val()
        };


          event.preventDefault();

          $.post('http://localhost:5000/email',formData, function(data) {
                console.log(data)
                alert('Success') ; // place success code here

              })
                  .fail(function(data) {
                      // place error code here
                      alert('Error');
                  })
          });
        });
