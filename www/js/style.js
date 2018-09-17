 $( ".img3" ).hide();

$( ".local" ).click(function() {
  $( ".img2" ).hide();
  $(".tudo").css("position", "inherit");

  $(".local").html('<img src="img/local2.png" class="img3" onclick="getLocation()">');
  $("#mapa").css("height", "350");
  $(".local").css("margin-top", "10px");


});