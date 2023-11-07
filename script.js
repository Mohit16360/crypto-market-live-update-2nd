var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var tellor = document.getElementById("tellor");

var settings = {
    "async": true,
    "crossDomain": true, 
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctellor&vs_currencies=usd"
    ,
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    tellor.innerHTML = response.tellor.usd;

});


$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        // Scroll to the target (footer) smoothly
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target; // Update the URL hash
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var refreshImage = document.getElementById("refreshImage");
    var homeLink = document.getElementById("Home");
    var marketLink = document.getElementById("Market");
    var newsLink = document.getElementById("NNews");

    if (refreshImage) {
        refreshImage.addEventListener("click", function() {
            location.reload(); // Reload the current page
        });
    }

    if (homeLink) {
        homeLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            location.reload(); // Reload the current page
        });
    }

    if (marketLink) {
        marketLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            location.reload(); // Reload the current page
        });
    }

    if (newsLink) {
        newsLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            location.reload(); // Reload the current page
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const surpriseButton = document.getElementById("surpriseButton");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    surpriseButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        document.body.style.filter = "none";
    });
});

  


