"use strict";

/*  
    Xinyi Wang
    06/29/17
    Xinyi's Portfolio  
    This file is the javascript for the web page "Xinyi's Portfolio".
*/


(function() {
    window.onload = function() {
        
        // Yaer display
        document.getElementById("year").textContent = (new Date()).getFullYear();
        
        // Animation for carousel swipe
        document.getElementsByClassName("carousel").swiperight(function() {
            this.carousel('prev');
        });
        document.getElementsByClassName("carousel").swipeleft(function() {  
            this.carousel('next');
        });
        
    };
})();