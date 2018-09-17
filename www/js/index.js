function getLocation(){

  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showp);

    } else {
        x.innerHTML="Geolocalização não é suportada nesse browser.";

    }

  }


var map;
var hereuare;
 
function showp(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);

    var myOptions={
        center:latlon,
        zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };

    map = new google.maps.Map(document.getElementById("mapa"), myOptions);
    hereuare = new google.maps.Marker({
        position: latlon,
        map:map,
        title:"Você está Aqui!"
    });


}



getLocation();






