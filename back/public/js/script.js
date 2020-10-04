$(document).ready(function(){
  $('#myBtn').click(function(){
    //$.get('/view_list', function(data, status){
    //  $('#demo').text(data);
    //})
    $.getJSON('/view_list', function(data, status){
      var items = [];
      $.each(data, (key, val) => {
        items.push("<li>" + key + ': ' + val + '</li>');
      });
      $('#demo').html('<ul>' + items.join('') + '</ul>');
    });
  });
});
