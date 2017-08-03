// JavaScript Document
function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  document.body.appendChild(script);
};

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(31.26407,34.798236),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({map: map,position: new google.maps.LatLng(31.26407,34.798236)});
  var infowindow = new google.maps.InfoWindow({content:'<strong>     UBreakIFix</strong>'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
};

function resetMapCenter() {
  var map=new google.maps.Map(document.getElementById("googleMap"));
  map.setOptions({
    center:new google.maps.LatLng(31.26407,34.798236),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  });
  var marker=new google.maps.Marker({map: map,position: new google.maps.LatLng(31.26407,34.798236)});
  var infowindow = new google.maps.InfoWindow({content:'<strong>     UBreakIFix</strong>'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
};

window.onload = loadScript;

function sendEmail() {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("content").value = "";
	alert('Message was sent successfully');
	return false;
};