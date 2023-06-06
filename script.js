$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.scroll-up-btn').addClass("show");
        }

        else{
            $('.navbar').removeClass("sticky");
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    $('.bars-button').click(function(){
        $('.navbar .menu').toggleClass("active")
    });

    var typed = new Typed(".typing",{
        strings: ["New Grad", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["New Grad", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
