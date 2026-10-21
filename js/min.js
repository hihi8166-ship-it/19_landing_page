$(document).ready(function(){



	// $('.left_quick').delay(3800).fadeIn(1000)

	// $('.service_img').mouseover(function(){
	// 	$(this).addClass('active')
	// })

	// $('.gnb').mouseover(function(){
	// 	$('.navi,.ham').addClass('over')
	// })
	// $('.gnb').mouseleave(function(){
	// 	$('.navi,.ham').removeClass('over')
	// })

	$(".service_img_over>div").mouseover(function() {
		var idx = $(this).index();
		$(".service_img").eq(idx).addClass("active").siblings().removeClass('active')
	});

	$('.call,.tel p').mouseover(function(){
		$('.tel').addClass('active')
	})
	$('.call,.tel p').mouseleave(function(){
		$('.tel').removeClass('active')
	})

	//$('body.sub .navi,body.sub .ham').addClass('white')
	$('body.sub .navi,body.sub .right_scroll_wrap,body.sub .ham').delay(0).fadeIn(1000);

	$('.right_scroll span').animate({'opacity':'1'},0,function bb(){
		$(this).delay(0).animate({'top':'9rem'},1800,function(){
			$(this).css({'top':'0','opacity':'0'})
			$(this).animate({'opacity':'1'},700,bb)
		})
	})

// 

	$('.slide_drag').mouseover(function(){
		$('#cursor').addClass('drag')
		$('.cursor_skip').addClass('drag')
	})
	$('.slide_drag').mouseleave(function(){
		$('#cursor').removeClass('drag')
		$('.cursor_skip').removeClass('drag')
	})
	$('.slide_drag2').mouseover(function(){
		$('#cursor').addClass('drag2')
	})
	$('.slide_drag2').mouseleave(function(){
		$('#cursor').removeClass('drag2')
	})
	$('.cursor_cick').mouseover(function(){
		$('#cursor').addClass('click')
	})
	$('.cursor_cick').mouseleave(function(){
		$('#cursor').removeClass('click')
	})
		 
	$('.main_box.box01').mouseover(function(){
		$('.main_box').addClass('active')
	})
	$('.main_box.box01').mouseleave(function(){
		$('.main_box').removeClass('active')
	})
	$('.main_box.box02').mouseover(function(){
		$('.main_box').addClass('active2')
	})
	$('.main_box.box02').mouseleave(function(){
		$('.main_box').removeClass('active2')
	})
	$('.main_box.box03').mouseover(function(){
		$('.main_box').addClass('active3')
	})
	$('.main_box.box03').mouseleave(function(){
		$('.main_box').removeClass('active3')
	})
	

	const cursor = document.querySelector('#cursor');
	const cursorCircle = cursor.querySelector('.cursor__circle');

	const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
	const pos = { x: 0, y: 0 }; // cursor's coordinates
	const speed = 0.2; // between 0 and 1

	const updateCoordinates = e => {
	  mouse.x = e.clientX;
	  mouse.y = e.clientY;
	}

	window.addEventListener('mousemove', updateCoordinates);


	function getAngle(diffX, diffY) {
	  return Math.atan2(diffY, diffX) * 180 / Math.PI;
	}

	function getSqueeze(diffX, diffY) {
	  const distance = Math.sqrt(
		Math.pow(diffX, 2) + Math.pow(diffY, 2)
	  );
	  const maxSqueeze = 0.15;
	  const accelerator = 1500;
	  return Math.min(distance / accelerator, maxSqueeze);
	}


	const updateCursor = () => {
	  const diffX = Math.round(mouse.x - pos.x);
	  const diffY = Math.round(mouse.y - pos.y);
	  
	  pos.x += diffX * speed;
	  pos.y += diffY * speed;
	  
	  const angle = getAngle(diffX, diffY);
	  const squeeze = getSqueeze(diffX, diffY);
	  
	  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
	  const rotate = 'rotate(' + angle +'deg)';
	  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

	  cursor.style.transform = translate;
	  cursorCircle.style.transform = rotate + scale;
	};

	function loop() {
	  updateCursor();
	  requestAnimationFrame(loop);
	}

	requestAnimationFrame(loop);



	const cursorModifiers = document.querySelectorAll('[cursor-class]');

	cursorModifiers.forEach(curosrModifier => {
	  curosrModifier.addEventListener('mouseenter', function() {
		const className = this.getAttribute('cursor-class');
		cursor.classList.add(className);
	  });
	  
	  curosrModifier.addEventListener('mouseleave', function() {
		const className = this.getAttribute('cursor-class');
		cursor.classList.remove(className);
	  });
	});

    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

	// const iframe = document.getElementById('myVimeo');
	// const player = new Vimeo.Player(iframe);

	// // 재생이 끝났을 때, 자동으로 다시 재생되지 않도록 설정
	// player.on('ended', function () {
	// 	// 비디오 끝났을 때 아무 동작 안 함 (기본 동작 유지)
	// 	player.unload();
	// });

	// player.setLoop(false).catch(function(error) {
	// console.error('Loop 설정 실패:', error);
	// });

	// // 혹시 loop 속성이 먹히지 않고 자동 재시작되면 강제로 stop 처리
	// player.on('play', function () {
	// 	player.getCurrentTime().then(function(seconds) {
	// 		player.getDuration().then(function(duration) {
	// 			if (duration - seconds < 0.5) {
	// 				player.pause();
	// 				console.log('강제 pause 실행');
	// 			}
	// 		});
	// 	});
	// });

    // $('.navi,.ham').addClass('white');

	history.scrollRestoration = "manual"
	window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);

        },0);
	}

    $('body.sub .navi,body.sub .ham').addClass('white');	
    $('body.sub').delay(3000).animate({'opacity':'1'},0,function(){
        $(this).addClass('active')
    })
    $('body.main .right_scroll_wrap').addClass('gray');	

	
	$('.footer_bt').click(function(){
		alert('준비중입니다')
	})
	/*
	family = 0
	$('.footer_bt').click(function(){
		if( family == 0 ){  
			family = 1; 
			$('.footer_family').addClass('active')
			$('.footer_bt').addClass('active')

		}
		else if ( family == 1 ){
			family = 0;
			$('.footer_family').removeClass('active')
			$('.footer_bt').removeClass('active')
		}
	})
	*/
	$('.top_bt').click(function(){
		$('body,html').animate({'scrollTop':'0'},400)
	})

	ham = 0
	$('.ham').click(function(){
		// alert('준비중입니다')
		if( ham == 0 ){  
			ham = 1; 
			$(this).addClass("active");            
			$('.gnb>ul').stop().fadeOut(1000)
			$('.right_scroll_wrap').addClass("hide");
			$('.site_wrap,.site_bg').addClass("active");
			$('.navi,.ham').addClass("over");
            $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
		}
		else if ( ham == 1 ){
			ham = 0;
			$(this).removeClass("active");
			$('.gnb>ul').stop().fadeIn(1000)
			$('.right_scroll_wrap').removeClass("hide");
			$('.site_wrap,.site_bg').removeClass("active");
			$('.navi,.ham').removeClass("over");
            $('body').off('scroll touchmove mousewheel');
		}
	})
	// $('.sitemap-2dep > li > a').on("click", function(){     
	// 	if($(this).children().children('.gnb_bt_line02').css("display")=="none"){        
	// 		$(this).children('.site_gnb_bt').addClass('close')
	// 		$(this).siblings('.gnb_dep2').stop().slideUp(350);
	// 	}else{      
	// 		$(this).children('.site_gnb_bt').removeClass('close')
	// 		$(this).siblings('.gnb_dep2').stop().slideDown(350); 
	// 	}
	// });




	const trigger = new ScrollTrigger.default({
	  trigger: {
			// once: true,
			offset: {
            element: {
                x: 0,
                // y: 0.05
                y: 0
            },
//			viewport: {
//                x: 0,
//                y: (trigger, frame, direction) => {
//                    return trigger.visible ? 0 : 0.3
//                }
//             }
        },
		toggle:{
			class:{
				in:'active',
				out:'inactive'
			}
		}

	  }
	});
	trigger.add('[data-active]')
//			.add('[data-slideInBottom]')
//			.add('[data-fadeIn]')
//			.add('[data-slideInBottom]')


win_w = $(window).width();
if ( win_w > 1400 ){

	// $('.main_wrap').delay(0).animate({'opacity':'1'},0,function(){
	// 	// player.pause();
	// 	$(this).addClass('intro')
	// 	$(this).delay(0).animate({'opacity':'1'},0,function(){
	// 		$(this).addClass('intro2')
	// 		$(this).delay(0).animate({'opacity':'1'},0,function(){
	// 			$(this).addClass('intro3')
	// 			$(this).delay(0).animate({'opacity':'1'},0,function(){
    //                 $('body.main .navi,body.main .ham,body.main .right_scroll_wrap').delay(0).fadeIn(1000);
    //                 $('.main_wrap').addClass('on');
    //                 setTimeout(function() {
    //                     $('.main_wrap').addClass('end');
    //                 }, 800);
	// 		        $('body').off('scroll touchmove mousewheel');
    //                 // $('body').css({'overflow-y':'auto'})
	// 			})
	// 		})
	// 	})
	// })
	$('.main_wrap').delay(2000).animate({'opacity':'1'},0,function(){
		// player.pause();
		$(this).addClass('intro')
		$(this).delay(1000).animate({'opacity':'1'},0,function(){
			$(this).addClass('intro2')
			$(this).delay(2600).animate({'opacity':'1'},0,function(){
				$(this).addClass('intro3')
				$(this).delay(1400).animate({'opacity':'1'},0,function(){
                    $('body.main .navi,body.main .right_scroll_wrap').delay(0).fadeIn(1000);
                    $('.cursor_skip2').removeClass('show')
                    $('.intro_wrap').delay(0).fadeOut(1000)
                    $('.main_skip_wrap').delay(0).fadeOut(0)
                    $('.main_wrap').addClass('on');
					$('#k_popup2').addClass('show');
                    setTimeout(function() {
                        $('.main_wrap').addClass('end');
                    }, 800);
			        $('body').off('scroll touchmove mousewheel');
				})
			})
		})
	})

    $('.main_skip_wrap').delay(1000).animate({'opacity':'1'},0,function(){
        $(this).fadeIn(1000)
        $('.cursor_skip2').addClass('show')
    })
    $('.main_skip_bt').click(function(){
        $('.cursor_skip2').removeClass('show')
        $('.intro_wrap').delay(0).fadeOut(1000)
        $('.main_skip_wrap').delay(0).fadeOut(0)
		$('#k_popup2').addClass('show2');
        $(this).delay(0).animate({'opacity':'1'},0,function(){
			$('body.main .navi').delay(500).fadeIn(1000);
			$('.main_wrap').addClass('on intro intro2 intro3');
			setTimeout(function() {
				$('.main_wrap').addClass('end');
			}, 800);
			$('body').off('scroll touchmove mousewheel');
		})
    })

    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $(document).on('click', '.top_bt', function(){
        $.fn.fullpage.moveTo(1);
        $('body.main .navi,body.main .ham,body.main .right_scroll_wrap').removeClass('white');
        $('.main_wrap').addClass('on');
        setTimeout(function() {
            $('.main_wrap').addClass('end');
        }, 800);
        $('.main_wrap,.greet_wrap,.land_wrap,.soso_wrap,.ach_wrap,.amenity_wrap,.service_wrap,.dis_wrap,.brand_wrap,.last_wrap').removeClass('active2 active3 active4 active5 active6 end2 end3 end4 end5 end6 end7 end8 on2 on3 on4 on5 on6 on7 on8')
    });

    //main
    var full_move = true;
    $("#section11").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.main_wrap').hasClass('end') == true){
                // $('.navi,.ham').removeClass('white');
                // $.fn.fullpage.moveTo(1);
            } else if($('.main_wrap').hasClass('end2') == true){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on2 end2').addClass('on');
                setTimeout(function() {
                    $('.main_wrap').addClass('end');
                }, 800);
            } 
            // else if($('.main_wrap').hasClass('end3') == true){
            // 	$('.main_wrap').removeClass('on3 end3').addClass('on2');
            // 	setTimeout(function() {
            // 		$('.main_wrap').addClass('end2');
            // 	}, 800);
            // } 
        } else if (delta < 0) {
            if($('.main_wrap').hasClass('end2') == true){
                $.fn.fullpage.moveTo(2);
            }else if($('.main_wrap').hasClass('end') == true){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end').addClass('on2');
                setTimeout(function() {
                    $('.main_wrap').addClass('end2');
                }, 800);
            }
            //  else if($('.main_wrap').hasClass('end2') == true){
            // 	$('.main_wrap').removeClass('on2 end2').addClass('on3');
            // 	setTimeout(function() {
            // 		$('.main_wrap').addClass('end3');
            // 	}, 800);
            // }
        }
    });

    //location
    var full_move = true;
    $("#section3").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.land_wrap').hasClass('end') == true){
                $.fn.fullpage.moveTo(2);
            } else if($('.land_wrap').hasClass('end2') == true){
                // $('.navi,.ham').removeClass('white');
                $('.land_wrap').removeClass('on2 end2').addClass('on');
                setTimeout(function() {
                    $('.land_wrap').addClass('end');
                }, 800);
            }
        } else if (delta < 0) {
            if($('.land_wrap').hasClass('end') == true){
                // $('.navi,.ham').addClass('white');
                $('.land_wrap').removeClass('on end').addClass('on2');
                setTimeout(function() {
                    $('.land_wrap').addClass('end2');
                }, 800);
            } else if ($('.land_wrap').hasClass('end2') == true){
                $.fn.fullpage.moveTo(4);
            }
        }
    });

    // soso
    var full_move = true;
    $("#section44").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.soso_wrap').hasClass('end') == true){
                $.fn.fullpage.moveTo(3);
            } else if($('.soso_wrap').hasClass('end2') == true){
                $('.soso_wrap').removeClass('on2 end2').addClass('on');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on22').addClass('end');
                }, 800);
            } else if($('.soso_wrap').hasClass('end3') == true){
                $('.soso_wrap').removeClass('on3 end3').addClass('on2');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on33').addClass('end2');
                }, 800);
            } else if($('.soso_wrap').hasClass('end4') == true){
                $('.soso_wrap').removeClass('on4 end4').addClass('on3');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on44').addClass('end3');
                }, 800);
            }
        } else if (delta < 0) {
            if($('.soso_wrap').hasClass('end4') == true){
                $.fn.fullpage.moveTo(5);
            } else if($('.soso_wrap').hasClass('end') == true){
                $('.soso_wrap').removeClass('on end').addClass('on2');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on11').addClass('end2');
                }, 800);
            } else if($('.soso_wrap').hasClass('end2') == true){
                $('.soso_wrap').removeClass('on2 end2').addClass('on3');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on22').addClass('end3');
                }, 800);
            } else if($('.soso_wrap').hasClass('end3') == true){
                $('.soso_wrap').removeClass('on3 end3').addClass('on4');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on33').addClass('end4');
                }, 800);
            }
        }
    });

    // ach
    function ach_active() {
        $('.ach_txt_box').each(function (index, item) {
            if($(window).scrollTop() > $(this).offset().top - $(window).height() * 1){
                $(this).addClass('active');
            }
            //  else {
            // 	$(this).removeClass('active');
            // }
        });
    }
    $('.us04').scroll(function (event) {
        if($('.ach_txt_box').offset()){
            ach_active();
        }
    });
    function ach_active2() {
        $('.ach_img_box').each(function (index, item) {
            if($(window).scrollTop() > $(this).offset().top - $(window).height() * 1){
                $(this).addClass('active');
            }
        });
    }
    $('.us04').scroll(function (event) {
        if($('.ach_img_box').offset()){
            ach_active2();
        }
    });

    $("#section555").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.ach_wrap').hasClass('end') == true){
                if($(window).scrollTop() <= $('.ach_scroll').offset().top){
                    $.fn.fullpage.moveTo(4);
                }
            }
        } else if (delta < 0) {
            if($('.ach_wrap').hasClass('end') == true){
                if($(window).scrollTop() + $(window).height() >= $('.ach_scroll').offset().top + $('.ach_scroll').outerHeight()){
                    $.fn.fullpage.moveTo(6);
                }
            }
        }
    });

    // amenity
    var full_move = true;
    $("#section4").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.amenity_wrap').hasClass('end') == true){
                $.fn.fullpage.moveTo(3);
            } else if($('.amenity_wrap').hasClass('end2') == true){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.amenity_wrap').removeClass('end2 active2').addClass('on');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on2').addClass('end');
                }, 800);
            } else if($('.amenity_wrap').hasClass('end3') == true){
                // $('.navi,.ham').removeClass('white');
                swiper_amenity.slideTo(3)
                $('.amenity_wrap').removeClass('end3 active3').addClass('on2');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on3').addClass('end2');
                }, 800);
            }
        } else if (delta < 0) {
            if($('.amenity_wrap').hasClass('end') == true){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                swiper_amenity.slideTo(3)
                $('.amenity_wrap').removeClass('end').addClass('active2 on2');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on').addClass('end2');
                }, 800);
            } else if ($('.amenity_wrap').hasClass('end2') == true){
                // $('.navi,.ham').addClass('white');
                $('.amenity_wrap').removeClass('end2').addClass('active3 on3');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on2').addClass('end3');
                }, 800);
            } else if ($('.amenity_wrap').hasClass('end3') == true){
                $.fn.fullpage.moveTo(5);
            }
        }
    });

    //service
    var full_move = true;
    $("#section6").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.service_wrap').hasClass('end') == true){
                $.fn.fullpage.moveTo(5);
            } else if($('.service_wrap').hasClass('end2') == true){
                $('.service_wrap').removeClass('on2 end2').addClass('on');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on22').addClass('end');
                }, 800);
            } else if($('.service_wrap').hasClass('end3') == true){
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.service_wrap').removeClass('on3 end3').addClass('on2');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on33').addClass('end2');
                }, 800);
            } 
        } else if (delta < 0) {
            if($('.service_wrap').hasClass('end') == true){
                $('.service_wrap').removeClass('on end').addClass('on2');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on11').addClass('end2');
                }, 800);
            } else if($('.service_wrap').hasClass('end2') == true){
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.service_wrap').removeClass('on2 end2').addClass('on3');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on22').addClass('end3');
                }, 800);
            } else if($('.service_wrap').hasClass('end3') == true){
                $.fn.fullpage.moveTo(7);
            }
        }
    });

    //dis2
    var full_move = true;
    $("#section88").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.dis_wrap2').hasClass('end') == true){
                $.fn.fullpage.moveTo(7);
            } else if($('.dis_wrap2').hasClass('end2') == true){
                $('.dis_wrap2').removeClass('on2 end2').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap2').removeClass('on22').addClass('end');
                }, 800);
            }
        } else if (delta < 0) {
            if($('.dis_wrap2').hasClass('end') == true){
                $('.dis_wrap2').removeClass('on end').addClass('on2');
                setTimeout(function() {
                    $('.dis_wrap2').removeClass('on11').addClass('end2');
                }, 800);
            } else if($('.dis_wrap2').hasClass('end2') == true){
                $.fn.fullpage.moveTo(9);
            }
        }
    });

    // dis
    var full_move = true;
    $("#section88").on("DOMMouseScroll mousewheel wheel", function(event,delta){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        if (delta > 0) {
            if($('.dis_wrap').hasClass('end') == true){
                $.fn.fullpage.moveTo(7);
            } else if($('.dis_wrap').hasClass('end2') == true){
                $('.navi,.ham').removeClass('white');
                $('.dis_wrap').removeClass('end2 active2').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on2').addClass('end');
                }, 800);
            } else if($('.dis_wrap').hasClass('end3') == true){
                $('.dis_wrap').removeClass('end3 active3').addClass('on2');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on4').addClass('end2');
                }, 800);
            } else if($('.dis_wrap').hasClass('end4') == true){
                $('.dis_wrap').removeClass('end4 active4').addClass('on3');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on4').addClass('end3');
                }, 800);
            } else if($('.dis_wrap').hasClass('end5') == true){
                $('.dis_wrap').removeClass('end5 active5').addClass('on4');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on5').addClass('end4');
                }, 800);
            } else if($('.dis_wrap').hasClass('end6') == true){
                $('.dis_wrap').removeClass('end6 active6').addClass('on5');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on6').addClass('end5');
                }, 800);
            }
        } else if (delta < 0) {
            if($('.dis_wrap').hasClass('end') == true){
                $('.dis_wrap').removeClass('end').addClass('active2 on2');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on').addClass('end2');
                }, 800);
            } else if ($('.dis_wrap').hasClass('end2') == true){
                // $('.navi,.ham').addClass('white');
                $('.dis_wrap').removeClass('end2').addClass('active3 on3');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on2').addClass('end3');
                }, 800);
            } else if ($('.dis_wrap').hasClass('end3') == true){
                // $('.navi,.ham').addClass('white');
                $('.dis_wrap').removeClass('end3').addClass('active4 on4');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on3').addClass('end4');
                }, 800);
            } else if ($('.dis_wrap').hasClass('end4') == true){
                // $('.navi,.ham').addClass('white');
                $('.dis_wrap').removeClass('end4').addClass('active5 on5');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on4').addClass('end5');
                }, 800);
            } else if ($('.dis_wrap').hasClass('end5') == true){
                // $('.navi,.ham').addClass('white');
                $('.dis_wrap').removeClass('end5').addClass('active6 on6');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on5').addClass('end6');
                }, 800);
            } else if ($('.dis_wrap').hasClass('end6') == true){
                $.fn.fullpage.moveTo(9);
            }
        }
    });

    $('#fullpage').fullpage({
        
    //		responsiveWidth: 1400,
        navigation: true,
        // anchors: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        'verticalCentered': true,
        'css3': true,
        'navigation': false,
        scrollingSpeed: 800,

        'afterLoad': function(anchorLink, index){

            // if ($('.section').is('.active')){
            // 	var sec = $(this).attr('id');
            // 	$('#'+sec).addClass('on');
            //     setTimeout(function() {
            //         $('#'+sec).addClass('end');
            //     }, 800);
            // }
            
            if(index == 1){
                // $.fn.fullpage.setAllowScrolling(true);
                // $.fn.fullpage.setKeyboardScrolling(true);	
            } else {
                // $('.main_wrap').removeClass('on');
            }

            if(index == 2){			
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);		
            } else {

            }

            if(index == 3){
            }else {

            }

            if(index == 4){
            }else {

            }
            
            if(index == 5){
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);	
            }else {

            }
            
            if(index == 6){
            }else {
            }
                
            if(index == 7){
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);
            }else {
            }

            if(index == 8){
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);
            }else {
            }

            if(index == 9){
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);
            }else {
            }

    //	
    //						if(index == 4){
    //						}
    //						else {			
    //						}



        },
        'onLeave' : function (index, nextIndex, direction){

            if (index == 1 && direction == 'down'){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('end');
                setTimeout(function() {
                    $('.main_wrap').removeClass('on');
                }, 800);
                $('.greet_wrap').addClass('on');
                setTimeout(function() {
                    $('.greet_wrap').addClass('end');
                }, 800);
            };

            if (index == 2 && direction == 'up'){
                // $('.navi,.ham').addClass('white');
                // $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.greet_wrap').removeClass('end');
                setTimeout(function() {
                    $('.greet_wrap').removeClass('on');
                }, 800);
                $('.main_wrap').addClass('on');
                setTimeout(function() {
                    $('.main_wrap').addClass('end');
                }, 800);
            } else if (index == 2 && direction == 'down'){
                $('.navi,.ham').removeClass('white');
                $('.greet_wrap').removeClass('end');
                setTimeout(function() {
                    $('.greet_wrap').removeClass('on');
                }, 800);
                $('.land_wrap').addClass('on');
                setTimeout(function() {
                    $('.land_wrap').addClass('end');
                }, 800);
            };

            if (index == 3 && direction == 'up'){
                $('.navi,.ham').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.land_wrap').removeClass('end');
                setTimeout(function() {
                    $('.land_wrap').removeClass('on');
                }, 800);
                $('.greet_wrap').addClass('on');
                setTimeout(function() {
                    $('.greet_wrap').addClass('end');
                }, 800);
            } else if (index == 3 && direction == 'down'){
                $('.navi,.ham').removeClass('white');
                $('.land_wrap').removeClass('end');
                setTimeout(function() {
                    $('.land_wrap').removeClass('on');
                }, 800);
                $('.amenity_wrap').addClass('on');
                setTimeout(function() {
                    $('.amenity_wrap').addClass('end');
                }, 800);
            };

            if (index == 4 && direction == 'up'){
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.amenity_wrap').removeClass('end');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on');
                }, 800);
                $('.land_wrap').addClass('on');
                setTimeout(function() {
                    $('.land_wrap').addClass('end');
                }, 800);
            } else if (index == 4 && direction == 'down'){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on end');
                $('.amenity_wrap').removeClass('end');
                setTimeout(function() {
                    $('.amenity_wrap').removeClass('on');
                }, 800);
                $('.soso_wrap').addClass('on');
                setTimeout(function() {
                    $('.soso_wrap').addClass('end');
                }, 800); 
            };

            if (index == 5 && direction == 'up'){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.soso_wrap').removeClass('end');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on');
                }, 800);
                $('.amenity_wrap').addClass('on3');
                setTimeout(function() {
                    $('.amenity_wrap').addClass('end3');
                }, 800);
            } else if (index == 5 && direction == 'down'){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.soso_wrap').removeClass('end');
                setTimeout(function() {
                    $('.soso_wrap').removeClass('on');
                }, 800);
                $('.service_wrap').addClass('on');
                setTimeout(function() {
                    $('.service_wrap').addClass('end');
                }, 800); 
            };

            // if (index == 6 && direction == 'up'){
            // 	$('.right_scroll_wrap').removeClass('gray');
            // 	$('.right_scroll_wrap').addClass('white');
            // 	$('.main_wrap').removeClass('on end');
            // 	$('.amenity_wrap').removeClass('end');
            // 	setTimeout(function() {
            // 		$('.amenity_wrap').removeClass('on');
            // 	}, 800);
            // 	$('.ach_wrap').addClass('on');
            // 	setTimeout(function() {
            // 		$('.ach_wrap').addClass('end');
            // 	}, 800);
            // } else if (index == 6 && direction == 'down'){
            // 	$('.navi,.ham').addClass('white');
            // 	$('.right_scroll_wrap').removeClass('white');
            // 	$('.right_scroll_wrap').addClass('gray');
            // 	$('.main_wrap').removeClass('on end');
            // 	$('.amenity_wrap').removeClass('end');
            // 	setTimeout(function() {
            // 		$('.amenity_wrap').removeClass('on');
            // 	}, 800);
            // 	$('.service_wrap').addClass('on');
            // 	setTimeout(function() {
            // 		$('.service_wrap').addClass('end');
            // 	}, 800); 
            // };

            if (index == 6 && direction == 'up'){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on end');
                $('.service_wrap').removeClass('end');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on');
                }, 800);
                $('.soso_wrap').addClass('on');
                setTimeout(function() {
                    $('.soso_wrap').addClass('end');
                }, 800);
            } else if (index == 6 && direction == 'down'){
                // $('.navi,.ham').removeClass('white');
                // $('.right_scroll_wrap').removeClass('white');
                // $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on end');
                $('.service_wrap').removeClass('end');
                setTimeout(function() {
                    $('.service_wrap').removeClass('on');
                }, 800);
                $('.dis_wrap2').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap2').addClass('end');
                }, 800); 
            };

            if (index == 7 && direction == 'up'){
                $('.main_wrap').removeClass('on end');
                $('.dis_wrap2').removeClass('end');
                setTimeout(function() {
                    $('.dis_wrap2').removeClass('on');
                }, 800);
                $('.service_wrap').addClass('on3');
                setTimeout(function() {
                    $('.service_wrap').addClass('end3');
                }, 800);
            } else if (index == 7 && direction == 'down'){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on end');
                $('.dis_wrap2').removeClass('end');
                setTimeout(function() {
                    $('.dis_wrap2').removeClass('on');
                }, 800);
                $('.dis_wrap').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap').addClass('end');
                }, 800); 
            };

            if (index == 8 && direction == 'up'){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.dis_wrap').removeClass('end');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on');
                }, 800);
                // $('.service_wrap').addClass('on3');
                // setTimeout(function() {
                // 	$('.service_wrap').addClass('end3');
                // }, 800);
                $('.dis_wrap2').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap2').addClass('end');
                }, 800);
            } else if (index == 8 && direction == 'down'){
                $('.navi,.ham').addClass('white');
                $('.right_scroll_wrap').removeClass('gray');
                $('.right_scroll_wrap').addClass('white');
                $('.main_wrap').removeClass('on end');
                $('.dis_wrap').removeClass('end');
                setTimeout(function() {
                    $('.dis_wrap').removeClass('on');
                }, 800);
                // $('.brand_wrap').addClass('on');
                // setTimeout(function() {
                // 	$('.brand_wrap').addClass('end');
                // }, 800); 
                $('.last_wrap').addClass('on');
                setTimeout(function() {
                    $('.last_wrap').addClass('end');
                }, 800); 
            };

            if (index == 9 && direction == 'up'){
                $('.navi,.ham').removeClass('white');
                $('.right_scroll_wrap').removeClass('white');
                $('.right_scroll_wrap').addClass('gray');
                $('.main_wrap').removeClass('on end');
                $('.last_wrap').removeClass('end');
                setTimeout(function() {
                    $('.last_wrap').removeClass('on');
                }, 800);
                // $('.brand_wrap').addClass('on');
                // setTimeout(function() {
                // 	$('.brand_wrap').addClass('end');
                // }, 800);
                $('.dis_wrap').addClass('on');
                setTimeout(function() {
                    $('.dis_wrap').addClass('end');
                }, 800);
            } else if (index == 9 && direction == 'down'){
                $('.footer').addClass('on');
                setTimeout(function() {
                    $('.footer').addClass('end');
                }, 800);
                $('header,.ham,.right_scroll_wrap').fadeOut();   
            };

            if (index == 10 && direction == 'up'){
                // $('.navi,.ham').removeClass('white');
                // $('.ach_wrap').addClass('on2');
                // setTimeout(function() {
                // 	$('.ach_wrap').addClass('end2');
                // }, 800);
                $('.footer').removeClass('on');
                setTimeout(function() {
                    $('.footer').removeClass('end');
                }, 800);
                $('header,.ham,.right_scroll_wrap').fadeIn();
            } else if (index == 11 && direction == 'down'){
            };

    //			if (index == 5 && direction == 'up'){				
    //				$('header,.right_scroll_wrap').fadeIn();
    //			} else if (index == 5 && direction == 'down'){
    //
    //			};

        },

    });

} else if ( win_w <= 1400 ){

    $('.amenity02 .amenity_vd').html('')

	// $('.main_wrap').delay(0).animate({'opacity':'1'},0,function(){
	// 	// player.pause();
	// 	$(this).addClass('intro')
	// 	$(this).delay(0).animate({'opacity':'1'},0,function(){
	// 		$(this).addClass('intro2')
	// 		$(this).delay(0).animate({'opacity':'1'},0,function(){
	// 			$(this).addClass('intro3')
	// 			$(this).delay(0).animate({'opacity':'1'},0,function(){
    //                 $('body.main .navi,body.main .ham,body.main .right_scroll_wrap').delay(0).fadeIn(1000);
    //                 $('.main_wrap').addClass('on');
    //                 setTimeout(function() {
    //                     $('.main_wrap').addClass('end');
    //                 }, 800);
	// 		        $('body').off('scroll touchmove mousewheel');
    //                 // $('body').css({'overflow-y':'auto'})
	// 			})
	// 		})
	// 	})
	// })
	$('.main_wrap').delay(2000).animate({'opacity':'1'},0,function(){
		// player.pause();
		$(this).addClass('intro')
		$(this).delay(1000).animate({'opacity':'1'},0,function(){
			$(this).addClass('intro2')
			$(this).delay(2600).animate({'opacity':'1'},0,function(){
				$(this).addClass('intro3')
				$(this).delay(1400).animate({'opacity':'1'},0,function(){
                    $('body.main .navi,body.main .ham,body.main .right_scroll_wrap').delay(0).fadeIn(1000);
                    $('.cursor_skip2').removeClass('show')
                    $('.intro_wrap').delay(0).fadeOut(1000)
                    $('.main_skip_wrap').delay(0).fadeOut(0)
                    $('.main_wrap').addClass('on');
					$('#k_popup2').addClass('show');
                    setTimeout(function() {
                        $('.main_wrap').addClass('end');
                    }, 800);
			        // $('body').off('scroll touchmove mousewheel');
                    $('body').css({'overflow-y':'auto'})
				})
			})
		})
	})

    $('.main_skip_wrap').delay(1000).animate({'opacity':'1'},0,function(){
        $(this).fadeIn(1000)
        $('.cursor_skip2').addClass('show')
    })
    $('.main_skip_bt').click(function(){
        $('.cursor_skip2').removeClass('show')
        $('.intro_wrap').delay(0).fadeOut(1000)
        $('.main_skip_wrap').delay(0).fadeOut(0)
		$('#k_popup2').addClass('show2');
        $(this).delay(0).animate({'opacity':'1'},0,function(){
			$('body.main .navi,body.main .ham').delay(500).fadeIn(1000);
			$('.main_wrap').addClass('on intro intro2 intro3');
			setTimeout(function() {
				$('.main_wrap').addClass('end');
			}, 800);
			// $('body').off('scroll touchmove mousewheel');
			$('body').css({'overflow-y':'auto'})
		})
    })

}

});

$(window).scroll(function(){

    sc = $(window).scrollTop();
    footerTop = $('.footer').offset().top - $(window).height()

    if ( sc>21 )
    {
        $('.navi').addClass('active')
        $('.ham').addClass('active2')
    }
    if ( sc<21 )
    {
        $('.navi').removeClass('active')
        $('.ham').removeClass('active2')
    }
 
    if( footerTop <= sc ){
        $('.footer').addClass('active');
    } else {
        $('.footer').removeClass('active');
    }


});


document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".site_list > li > a");
//   const menuItems = document.querySelectorAll(".site_list > li");

  menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
      const submenu = this.nextElementSibling;
    //   const submenu = this.lastElementChild;
       
      // 메뉴 링크 클릭 시 하위 메뉴 토글
      if (submenu && submenu.classList.contains("site_list2")) {
        e.preventDefault(); // 페이지 이동 방지

        // 다른 열린 메뉴 닫기
        document.querySelectorAll(".site_list2.open").forEach(openMenu => {
          if (openMenu !== submenu) openMenu.classList.remove("open");
        });

        submenu.classList.toggle("open");
      }
    });
  });
});




