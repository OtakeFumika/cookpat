$(function(){
  $('#authentication-form').on('submit', function(e) {
    e.preventDefault();
    var input = $('#authentication-password').val();

    $.ajax({
      type: 'GET',
      url: './edit',
      data: {password: input},
      dataType: 'json',
    })
    .done(function(data){
      console.log(data);
      if(data.name){
        $('#authentication-user').css({'display':'none'});
      }
    })
  });
});
