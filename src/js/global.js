function minFill(){
    var target = $(".wrapper");
    var fillHeight = $(window).height();
    $(".js-subtract-fill").each(function(){
        var element = $(this);
        fillHeight = fillHeight - element.outerHeight(includeMargin=true);
    });
    target.css({
        "min-height": fillHeight
    });
}

minFill();

$(window).on("resize", minFill);