$(document).ready(

  
    function geoFindMe() {
      var current = $("#current");
      var dayOne = $("#dayOne");
      var dayTwo = $("#dayTwo");
      var dayThree = $("#dayThree");
      var dayFour = $("#dayFour");
      var dayFive  = $("#dayFive");
      var proxy= "https://cors-anywhere.herokuapp.com/";
      
      
      if (!navigator.geolocation){
        current.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
      }
    
      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        var settings = {
      "async": true,
      "crossDomain": true,
      "url": proxy+"https://api.darksky.net/forecast/beb42a9af6a1a158fd681d64059f1ced/"+ latitude +"," +  longitude,
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "88c16bef-1c6f-431b-8b70-779c8b2db0b5"
      }
    }
    
    $.ajax(settings).done(function (response) {
        var d= new Date(response.currently.time);
      console.log(d);
    var crntTmp=response.currently.temperature;
    var body = $("body");
    if( crntTmp >= 0 && crntTmp <=10 ){
        body.addClass("zero_ten");
    }
        else if(crntTmp>=10 && crntTmp <=20){
              body.addClass("ten_twenty");  
                }
      else if(crntTmp>=20 && crntTmp <=30){
              body.addClass("twenty_thirty");  
                }
      else if(crntTmp>=30 && crntTmp <=40){
              body.addClass("thirty_forty");  
                }
      else if(crntTmp>=40 && crntTmp <=50){
              body.addClass("forty_fifty");  
                }
      else if(crntTmp>=50 && crntTmp <=60){
              body.addClass("fifty_sixty");  
                }
      else if(crntTmp>=60 && crntTmp <=70){
              body.addClass("sixty_seventy");  
                }
      else if(crntTmp>=70 && crntTmp <=80){
              body.addClass("seventy_eighty");  
                }
    else if(crntTmp>=80 && crntTmp <=90){
              body.addClass("eighty_ninety");  
                }
    else if(crntTmp>=90 && crntTmp <=100){
              body.addClass("ninety_hund");  
                }
    else if(crntTmp>=100){
              body.addClass("hund_plus");  
                }
    
    
    
    current.append("<h1>"+ response.currently.temperature.toFixed(0) +"°</h1>");
    current.append('<img id="current_icon">');
    current.append("<p>"+ response.currently.summary +"</p>");
    dayOne.append("<h1>"+ response.daily.data[1].temperatureHigh.toFixed(0) +"°</h1>" + "<p>"+ response.daily.data[1].icon +"</p>"+"<span>"+response.daily.data[1].temperatureMin.toFixed(0)+"° / </span>"+"<span>"+response.daily.data[1].temperatureMax.toFixed(0)+"°</span>");
    dayTwo.append("<h1>"+ response.daily.data[2].temperatureHigh.toFixed(0) +"°</h1>" + "<p>"+ response.daily.data[2].icon +"</p>"+"<span>"+response.daily.data[2].temperatureMin.toFixed(0)+"° / </span>"+"<span>"+response.daily.data[2].temperatureMax.toFixed(0)+"°</span>");
      dayThree.append("<h1>"+ response.daily.data[3].temperatureHigh.toFixed(0) +"°</h1>" + "<p>"+ response.daily.data[3].icon +"</p>"+"<span>"+response.daily.data[3].temperatureMin.toFixed(0)+"° / </span>"+"<span>"+response.daily.data[3].temperatureMax.toFixed(0)+"°</span>");
    dayFour.append("<h1>"+ response.daily.data[4].temperatureHigh.toFixed(0) +"°</h1>" + "<p>"+ response.daily.data[4].icon +"</p>"+"<span>"+response.daily.data[4].temperatureMin.toFixed(0)+"° / </span>"+"<span>"+response.daily.data[4].temperatureMax.toFixed(0)+"°</span>");
    dayFive.append("<h1>"+ response.daily.data[5].temperatureHigh.toFixed(0) +"°</h1>" + "<p>"+ response.daily.data[5].icon +"</p>"+"<span>"+response.daily.data[5].temperatureMin.toFixed(0)+"° / </span>"+"<span>"+response.daily.data[5].temperatureMax.toFixed(0)+"°</span>");
    // console.log(response);
        // to console.log data shown by API //
  var clearNight = "https://i.imgur.com/9TgkwZ0.png";
      if(response.currently.icon == "clear-night"){
      $("#current_icon").attr("src", clearNight);
    }
    if(response.daily.data[1].icon == "clear-day"){
        $("dayOneIcon").attr("src",)
       }
  });
  
    }
  
    function error() {
      current.innerHTML = "Unable to retrieve your location";
    }
  
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
  
   
  );
     
     