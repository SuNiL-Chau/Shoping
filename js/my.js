function linkedin() {
    $(".linkedin").click(function() {
        window.open("https://www.linkedin.com", "_blank");
    });
}

function twitter() {
    $(".twitter").click(function() {
        window.open("https://www.twitter.com", "_blank");
    });
}

function facebook() {
    $(".facebook").click(function() {
        window.open("https://www.facebook.com", "_blank");
    });
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(window).scroll(function() {

    var topWindow = $(window).scrollTop();
    var topWindow = topWindow * 1.5;

    var windowHeight = $(window).height();

    var position = topWindow / windowHeight;
    position = 1 - position;
    $('.arrow-wrap').css('opacity', position);

});
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});