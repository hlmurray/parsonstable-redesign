function minFill(){
    var target = $(".js-min-fill");
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