$(document).ready(function() {
    $("#lnb > li").hover(function() {
        $(".submenu", this).stop().show()
    }, function() {
        $(".submenu", this).stop().hide();
    })

    let idx= 0;
    let interval;
    mainSlide();
    
    function mainSlide() {
        interval = setInterval(function() {
            $(".scene").eq(idx).animate({left: "-100%"}, 600).animate({left: "100%"}, 0);
            idx==2?idx=0:idx++;
            $(".scene").eq(idx).animate({left: 0}, 600);
        }, 3000)
    }

    $("#sdstop").click(function(){
        $("#sdplay").show();
        $(this).hide();
        clearInterval(interval);
    })

    $("#sdplay").click(function(){
        $("#sdstop").show();
        $(this).hide();
        mainSlide();
    });

    $("#sdnext").click(function() {
        clearInterval(interval);
        $("#sdplay").show();
        $("#sdstop").hide();
        $(".scene").eq(idx).stop(false, true).animate({left: "-100%"}, 600).animate({left: "100%"}, 0);
        idx==2?idx=0:idx++;
        $(".scene").eq(idx).stop(false, true).animate({left: 0}, 600);        
    })

    $("#sdprev").click(function() {
        clearInterval(interval);
        $("#sdplay").show();
        $("#sdstop").hide();
        $(".scene").eq(idx).stop(false, true).animate({left: "100%"}, 600);
        idx==0?idx=2:idx--;
        $(".scene").eq(idx).stop(false, true).animate({left: "-100%"}, 0).animate({left: 0}, 600);
    })

    let eidx = 0;
    let einterval;
    eventSlide();

    function eventSlide() {
        einterval = setInterval(function() {
            $(".event-scene").eq(eidx).animate({left: "-100%"}, 600).animate({left: "100%"}, 0);
            eidx==2?eidx=0:eidx++;
            $(".event-scene").eq(eidx).animate({left: 0}, 600);
        }, 3000)
    }

    $("#enext").click(function() {
        clearInterval(einterval);
        $(".event-scene").eq(eidx).stop(false, true).animate({left: "-100%"}, 600).animate({left: "100%"}, 0);
        eidx==2?eidx=0:eidx++;
        $(".event-scene").eq(eidx).stop(false, true).animate({left: 0}, 600);
    })
    $("#enext").mouseleave(function() {
        eventSlide();
    })

    $("#eprev").click(function() {
        clearInterval(einterval);
        $(".event-scene").eq(eidx).stop(false, true).animate({left: "100%"}, 600);
        eidx==0?eidx=2:eidx--;
        $(".event-scene").eq(eidx).stop(false, true).animate({left: "-100%"}, 0).animate({left: 0}, 600);
    })
    $("#eprev").mouseleave(function() {
        eventSlide();
    })

    $(".item-wrap > .item").hover(function() {
        $(".popup", this).stop().fadeIn();
    }, function() {
        $(".popup", this).stop().fadeOut();
    });

    $(".sailImg").hover(function() {
        $(".popup2").stop().fadeIn();
    }, function() {
        $(".popup2").stop().fadeOut();
    });




    $("#fsite").change(function() {
        let url = $("#fsite").val();
        $("#fsite").onchange(location.href=(url));
    })
})