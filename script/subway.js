(function($){
    var subway = {
        init: function(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.footer();
        },
        header: function(){
            // 메뉴 슬라이드
            $('.menu-btn').on({
                mouseenter: function(){
                    $('.sub').stop().slideDown(400, 'easeOutExpo');
                    $('.menu-btn').removeClass('addHover');
                    $(this).addClass('addHover');
                },
                focusin: function(){
                    $('.sub').stop().slideDown(400, 'easeOutExpo');
                    $('.menu-btn').removeClass('addHover');
                    $(this).addClass('addHover');
                }
            });
            $('#nav').on({
                mouseleave: function(){
                    $('.sub').stop().slideUp(400, 'easeOutExpo');
                    $('.menu-btn').removeClass('addHover');

                }
            });
        },
        section1: function(){
            // 슬라이드
            var cnt=0;
            var setId=null;
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:-1920*cnt},600,function(){
                    if(cnt>4){cnt=0}
                    if(cnt<0){cnt=4}
                    $('.slide-wrap').stop().animate({left:-1920*cnt},0);
                });
                pageEvent();
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function autoTimer(){
                setId=setInterval(nextCount,3000);
            }
            setTimeout(autoTimer, 100);
            // 페이지 버튼
            function pageEvent(){
                $('.page-btn').removeClass('addPage');
                $('.page-btn').eq(cnt==5?0:cnt).addClass('addPage');
            }
            $('.page-btn').each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        cnt=idx;
                        mainSlide();
                        stopFn();
                    }
                });
            });
            function stopFn(){
                clearInterval(setId);
            }
        },
        section2: function(){
            $('.next-btn').on({
                click: function(e){
                    e.preventDefault();
                }
            });
            $('.prev-btn').on({
                click: function(e){
                    e.preventDefault();
                }
            });
        },
        section3: function(){

        },
        section4: function(){

        },
        footer: function(){

        },
    }
    subway.init();
})(jQuery);