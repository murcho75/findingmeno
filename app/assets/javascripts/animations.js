/*----------------------------------------------------*/
/*	Template Animations
/*----------------------------------------------------*/
	
$(document).ready(function(){
	
		"use strict";
	
		$('#intro').waypoint(function() {		
            setTimeout(function(){$('#intro_description').addClass('animated fadeInLeft')},200);			
            setTimeout(function(){$('#intro_form').addClass('animated fadeInRight')},200);
        }, { offset: '85%' });
	
		$('#about-1').waypoint(function() {		
            setTimeout(function(){$('#about-1-img').addClass('animated fadeInRight')},400);
            setTimeout(function(){$('#about-1-text').addClass('animated fadeInLeft')},400);
        }, { offset: '65%' });
		
		$('#about-2').waypoint(function() {
            setTimeout(function(){$('#video_holder').addClass('animated fadeInLeft')},400);
            setTimeout(function(){$('#about-2-text').addClass('animated fadeInRight')},400);
        }, { offset: '85%' });

		$('#features').waypoint(function() {
            setTimeout(function(){$('#feature_1').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#feature_2').addClass('animated fadeInDown')},800);
			setTimeout(function(){$('#feature_3').addClass('animated fadeInDown')},1200);
            setTimeout(function(){$('#feature_4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('#feature_5').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('#feature_6').addClass('animated fadeInUp')},1200);
        }, { offset: '75%' });
		
		$('#faq').waypoint(function() {
			setTimeout(function(){$('#question_1').addClass('animated fadeInLeft')},400);
			setTimeout(function(){$('#question_2').addClass('animated fadeInRight')},400);
			setTimeout(function(){$('#question_3').addClass('animated fadeInLeft')},800);
			setTimeout(function(){$('#question_4').addClass('animated fadeInRight')},800);
        }, { offset: '75%' });
		
		$('#pricing').waypoint(function() {
			setTimeout(function(){$('#price_1').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#price_2').addClass('animated fadeInDown')},700);
			setTimeout(function(){$('#price_3').addClass('animated fadeInDown')},1000);
        }, { offset: '75%' });
		
		$('#blog').waypoint(function() {
			setTimeout(function(){$('#blog_post_1').addClass('animated fadeInLeft')},400);
			setTimeout(function(){$('#blog_post_2').addClass('animated fadeInRight')},400);
			setTimeout(function(){$('#blog_post_3').addClass('animated fadeInLeft')},800);
			setTimeout(function(){$('#blog_post_4').addClass('animated fadeInRight')},800);
        }, { offset: '75%' });	

		$('#what-we-do').waypoint(function() {
			setTimeout(function(){$('#service-image').addClass('animated fadeInLeft')},800);
			setTimeout(function(){$('#service-1').addClass('animated fadeInRight')},300);
			setTimeout(function(){$('#service-2').addClass('animated fadeInRight')},600);
			setTimeout(function(){$('#service-3').addClass('animated fadeInRight')},900);
        }, { offset: '75%' });	
		
		$('#our-skills').waypoint(function() {
			setTimeout(function(){$('#progress-bar-holder').addClass('animated fadeInLeft')},600);
			setTimeout(function(){$('#progress-bar-desc').addClass('animated fadeInRight')},600);
        }, { offset: '75%' });
		
		$('#team').waypoint(function() {			
			setTimeout(function(){$('#team-1').addClass('animated fadeInDown')},300);
			setTimeout(function(){$('#team-2').addClass('animated fadeInDown')},600);
			setTimeout(function(){$('#team-3').addClass('animated fadeInDown')},900);
			setTimeout(function(){$('#team-4').addClass('animated fadeInDown')},1200);
        }, { offset: '75%' });	
		
		$('#clients').waypoint(function() {
            setTimeout(function(){$('#client-logo-1').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('#client-logo-2').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('#client-logo-3').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('#client-logo-4').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('#client-logo-5').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('#client-logo-6').addClass('animated fadeInUp')},1400);
		}, { offset: '65%' });
		
		$('#footer').waypoint(function() {
			setTimeout(function(){$('.footer-nav').addClass('animated fadeInDown')},400);
            setTimeout(function(){$('#footer_copy').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('#footer_icons').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#subscribe-form').addClass('animated fadeInDown')},400);
			setTimeout(function(){$('#newsletter-paragraph').addClass('animated fadeInUp')},400);
		}, { offset: '94%' });
		
		
});