/*global document, $, console, alert, window, setInterval*/
$(document).ready(function () {
    "use strict";
    $("#login").animate({
        left: "120px"
    }, 2000);
    
     $("#login").animate({
        top: "+=250px"
    }, 2000);
});

var input = document.getElementById('input'),
    login = document.getElementById('login'),
    password = document.getElementById("password"),
    link = document.getElementById("link"),
    clock = document.getElementById("clock"),
    season = document.getElementById("season"),
    result = document.getElementById("result"),
    press = document.getElementById("press");

input.onfocus = function () {
    'use strict';
    
    //Store placeholder Attribute in Backup Attribute
    
    this.setAttribute('bow', this.getAttribute('placeholder'));
    
    //Empty placeholder Attribute 
    
    this.setAttribute('placeholder', '');
};

input.onblur = function () {
    
    'use strict';
    
    //Get placeholder Attribute from backup Attribute 
    
    this.setAttribute('placeholder', this.getAttribute('bow'));
    
    //Empty backup attribute 
    
    this.setAttribute('bow', '');
};

password.onfocus = function () {
    "use strict";
    
this.setAttribute("bob", this.getAttribute("placeholder"));
this.setAttribute("placeholder", "");
};

password.onblur = function () {
    
    this.setAttribute("placeholder", this.getAttribute("bob"));
    
    this.setAttribute("bob", "");
}

function logIn () {
    "use strict";
    
    if(input.value === "positive" && password.value === "me") {
        link.setAttribute("href", "https://www.facebook.com");
        link.setAttribute("target", "#body");
    } else {
        
        alert("wrong Password, Don't Try To Log Again!!")
        
    }
}




function showTime() {
    
    'use strict';
    
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    if (hours < 10) {
        
        hours = '0' + hours;
    }
    
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
        
        seconds = '0' + seconds;
    }

    clock.textContent = hours + ':' + minutes + ':' + seconds;
    
}

window.onload = function () {
    
    'use strict';
    
    setInterval(showTime, 1000);
};


show.onclick = function() {
    
"use strict";
    
if(show.textContent === "show Password") {
    
    this.textContent = "Hide Password";
    password.setAttribute("type", "text");
}
    else {
        
        this.textContent = "show Password";
        password.setAttribute("type", "password");
}
};

press.onclick = function () {
    
    "use strict";
    
    switch (season.value) {
        
    case "spring":
        
        result.textContent = "Flowers Is Every Where";
        
        break;
        
    case "summer":
        
        result.textContent = "Hot And Hot";
        
        break;
        
    case "autum":
        
        result.textContent = "A New Begin";
        
        break;        
        
    case "winter":
        
        result.textContent = "It's My Spring";

        break;
            
        default:
            
        result.textContent = "You Didn't Enter A Season Name!!";
}
}

season.onfocus = function() {
    
    "use strict";
    
    this.setAttribute("reply", this.getAttribute("placeholder"));
    
    this.setAttribute("placeholder", "");
}


season.onblur = function () {
    
    "use strict";
    
    this.setAttribute("placeholder", this.getAttribute("reply"));
    this.setAttribute("reply", "");
}




























