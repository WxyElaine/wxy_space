"use strict";

/*  
    Xinyi Wang
    06/29/17
    Xinyi's Portfolio  
    This file is the javascript for the web page "Xinyi's Portfolio".
*/

$(document).ready(function() {
    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
});