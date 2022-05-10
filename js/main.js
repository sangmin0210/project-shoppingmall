$(document).ready(function() {
    // a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });

    $("#lnb > li").hover(function() {
        $(".submenu", this).stop().show()
    }, function() {
        $(".submenu", this).stop().hide();
    })



    // ===========login==========
    $(".login-id").click(function() {
        $("#login-wrap").fadeIn();
    })
    $(".close").click(function() {
        $("#login-wrap").hide();
    })


    $(".auto").click(function() {
        $(this).siblings(".auto2").stop().show();
    })
    $(".auto2").click(function() {
        $(this).stop().hide();
    });

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

    $(".saleImg").hover(function() {
        $(".popup2").stop().fadeIn();
    }, function() {
        $(".popup2").stop().fadeOut();
    });

    $("#fsite").change(function() {
        let url = $("#fsite").val();
        $("#fsite").onchange(location.href=(url));
    })

    // ================== 모바일====================

    $("#mb-icon").click(function() {
        $("#m-menu").animate({left: "0%"}, 600);
        $("#m-back").fadeIn(600);
    })

    $(".close").click(function() {
        $("#m-menu").animate({left: "-100%"}, 600);
        $("#m-back").fadeOut(600);
    })
    
    // 모바일 슬라이드

    // var ww = $(window).width();
    // if (ww < 1280) {
    //     var swiper = new Swiper(".mySwiper", {
    //         slidesPerView: 3,
    //         spaceBetween: 10,
    //         freeMode: true,
    //     });
    // } else if (ww > 1280){
    //     swiper.destroy();
    // }
    var mySwiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 767 && mySwiper == undefined) {
            mySwiper = new Swiper('.mySwiper', {
                slidesPerView: 3,
                spaceBetween: 5,
                freeMode: true,
                slideToClickedSlide: true,
            });
        } else if (screenWidth > 767 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize 윈도우 width 값 실시간으로 확인
    $(window).on('resize', function(){
        initSwiper();
    });
})
