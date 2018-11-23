$(document).ready(function() {

  $('form').on('submit', function(){

      var task = $('form').serializeArray()[0].value;
      var item = {task: task};

      $.ajax({
        type: 'POST',
        url: '/',
        data: item,
        success: function(data){
          location.reload();
        }
      });

      return false;

  });

  $("i").on("click", function() {
    // Grandparent "div" element
    $(this).parent().parent().css({"opacity": "0"});

    // Grandparent -> h2
    var task = $(this).parent().parent().find("h2");

    // Replace spaces with ''
    var task = task.text().replace(/ /g, "")

    $.ajax({
      type: 'DELETE',
      url: '/' + task,
      success: function(data){
        location.reload();
      }
    });
  });
});
