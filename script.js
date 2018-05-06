$(document).ready(


    function geoFindMe() {
        var current = $("#current");
        var dayOne = $("#dayOne");
        var dayTwo = $("#dayTwo");
        var dayThree = $("#dayThree");
        var dayFour = $("#dayFour");
        var dayFive = $("#dayFive");
        var daySix = $("#daySix");
        var proxy = "https://cors-anywhere.herokuapp.com/";


        if (!navigator.geolocation) {
            current.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": proxy + "https://api.darksky.net/forecast/beb42a9af6a1a158fd681d64059f1ced/" + latitude + "," + longitude,
                "method": "GET",
                "headers": {
                    "Cache-Control": "no-cache",
                    "Postman-Token": "88c16bef-1c6f-431b-8b70-779c8b2db0b5"
                }
            };

            $.ajax(settings).done(function(response) {
                var utcSeconds = response.currently.time;
                var d_One = response.daily.data[1].time*1000;
                var d_Two = response.daily.data[2].time*1000;
                var d_Three = response.daily.data[3].time*1000;
                var d_Four = response.daily.data[4].time*1000;
                var d_Five = response.daily.data[5].time*1000;
                var d_Six = response.daily.data[6].time*1000;
                var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                d.setUTCSeconds(utcSeconds);
              
                var crntTmp = response.currently.temperature;
                var body = $("body");
                if (crntTmp >= 0 && crntTmp <= 10) {
                    body.addClass("zero_ten");
                } else if (crntTmp >= 10 && crntTmp <= 20) {
                    body.addClass("ten_twenty");
                } else if (crntTmp >= 20 && crntTmp <= 30) {
                    body.addClass("twenty_thirty");
                } else if (crntTmp >= 30 && crntTmp <= 40) {
                    body.addClass("thirty_forty");
                } else if (crntTmp >= 40 && crntTmp <= 50) {
                    body.addClass("forty_fifty");
                } else if (crntTmp >= 50 && crntTmp <= 60) {
                    body.addClass("fifty_sixty");
                } else if (crntTmp >= 60 && crntTmp <= 70) {
                    body.addClass("sixty_seventy");
                } else if (crntTmp >= 70 && crntTmp <= 80) {
                    body.addClass("seventy_eighty");
                } else if (crntTmp >= 80 && crntTmp <= 90) {
                    body.addClass("eighty_ninety");
                } else if (crntTmp >= 90 && crntTmp <= 100) {
                    body.addClass("ninety_hund");
                } else if (crntTmp >= 100) {
                    body.addClass("hund_plus");
                }



                current.append( "<h3>"+ d.toLocaleDateString("en-US",options) +"</h3>" + "<h1>" + response.currently.temperature.toFixed(0) + "°</h1>"+ "<p class='current_icon'></p>" +"<p>" + response.currently.summary + "</p>"+ "<p>"+ response.minutely.summary +"</p>" + "<p>"+ response.hourly.summary +"</p>" );
                current.append();
                dayOne.append("<p>"+ moment(d_One).format("MMMM DD, YYYY") +"</p>" + "<h1>"+ response.daily.data[1].temperatureHigh.toFixed(0) + "°</h1>" + "<p id='d1_icon'></p>" + "<span>" + response.daily.data[1].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[1].temperatureMax.toFixed(0) + "°</span>");
                dayTwo.append("<p>"+ moment(d_Two).format("MMMM DD, YYYY") +"</p>" + "<h1>" + response.daily.data[2].temperatureHigh.toFixed(0) + "°</h1>" + "<p id='d2_icon'></p>" + "<span>" + response.daily.data[2].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[2].temperatureMax.toFixed(0) + "°</span>");
                dayThree.append("<p>"+ moment(d_Three).format("MMMM DD, YYYY") +"</p>" + "<h1>" + response.daily.data[3].temperatureHigh.toFixed(0) + "°</h1>" + "<p class='icon'>" + "<p id='d3_icon'></p>" + "</p>" + "<span>" + response.daily.data[3].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[3].temperatureMax.toFixed(0) + "°</span>");
                dayFour.append("<p>"+ moment(d_Four).format("MMMM DD, YYYY") +"</p>" + "<h1>" + response.daily.data[4].temperatureHigh.toFixed(0) + "°</h1>" + "<p class='icon'>" + "<p id='d4_icon'></p>" + "</p>" + "<span>" + response.daily.data[4].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[4].temperatureMax.toFixed(0) + "°</span>");
                dayFive.append("<p>"+ moment(d_Five).format("MMMM DD, YYYY") +"</p>" + "<h1>" + response.daily.data[5].temperatureHigh.toFixed(0) + "°</h1>" + "<p class='icon'>" + "<p id='d5_icon'></p>" + "</p>" + "<span>" + response.daily.data[5].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[5].temperatureMax.toFixed(0) + "°</span>");
                daySix.append("<p>"+ moment(d_Six).format("MMMM DD, YYYY") +"</p>" + "<h1>" + response.daily.data[6].temperatureHigh.toFixed(0) + "°</h1>" + "<p class='icon'>" + "<p id='d6_icon'></p>" + "</p>" + "<span>" + response.daily.data[6].temperatureMin.toFixed(0) + "° / </span>" + "<span>" + response.daily.data[6].temperatureMax.toFixed(0) + "°</span>");
                console.log(response.daily.icon);
                // to console.log data shown by API //
                var currently_icon = response.currently.icon;
                var crnt_icon = $(".current_icon");
                var dayOneIcon = $("#d1_icon");
                var dayTwoIcon = $("#d2_icon");

                if(currently_icon == "clear-day"){
                    crnt_icon.append('<i class="wi wi-day-sunny"></i>');
                }

                switch(response.daily.data[1].icon){
                    case 'clear-day':
                    dayOneIcon.append('<i class="wi wi-day-sunny"></i>');
                }

                switch(response.daily.data[2].icon){
                    case 'clear-day':
                    dayTwoIcon.append('<i class="wi wi-day-sunny"></i>');
                }


            });

        }

        function error() {
            current.innerHTML = "Unable to retrieve your location";
        }


        navigator.geolocation.getCurrentPosition(success, error);
    }


);