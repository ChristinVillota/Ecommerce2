$(document).ready(function(e) {
    $('.button').click(function(e) {
     var pos = $(this).parent().find('.inputid').val();
     alert(pos);
     //Do your AJAX call here to send data to server.
     return false;
   });​
 });