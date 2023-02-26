$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $("#swift a").click(function(){
        // $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $(".type-effect").typed({
        strings: ["Full Stack Developer" ,"Designer","Data Scientist"],
        typeSpeed: 250,
        backSpeed:60, 
        loop: true
    })
});