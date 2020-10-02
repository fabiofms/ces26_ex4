$(document).ready(function(){
  $('#myBtn').click(function(){
    $.get('/view_list', function(data, status){
      $('#demo').text(data);
    })
  });
});
