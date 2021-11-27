var image, imageType, description;
jQuery(document).ready(function($){
	
	$('#submit-final-button').click(function(){
		window.location.href = siteurl+'/project-thank-you?id='+$('#_acf_post_id').val();
	});
	
	
	$('#submit-final').click(function(){
		$( "#acf-form" ).submit();
		
	});
	
	$('#editor-button').click(function(){
		$("#site-title").addClass("scrollfixed");
	    $('html, body, #big-page-wrapper').animate({
	        scrollTop: 0
	    }, 500, function(){
			$('#form-editor').addClass('active');
			$("#site-title").addClass("scroll");
			$('#banner-buttons').addClass("disabled");		    
	    });
	});
	$('#form-editor .close').click(function(){
		$('#form-editor').removeClass('active');
		$("#site-title").removeClass("scrollfixed");
		$("#site-title").removeClass("scroll");
		$('#banner-buttons').removeClass("disabled");
	});
	$('.display-number li a').click(function(e){
		e.preventDefault();
		$('.display-number li').removeClass('current');
		var listIndex = $(this).parent().index();		
		$('.display-number-a li').eq(listIndex).each(function(){
			$(this).addClass('current');
		});
		$('.display-number-b li').eq(listIndex).each(function(){
			$(this).addClass('current');
		});
		$('.instruction-panel').addClass('hidden');
		$($(this).attr('href')).removeClass('hidden');
	});
	
	$('.next.button').click(function(){
		var instructIndex = $('.display-number-a li.current').index();
		if(instructIndex < $('.display-number-a li').size()-1){
			$('.display-number li').removeClass('current');
			$('.display-number-a li').eq(instructIndex).each(function(){
				$(this).addClass('current');
			});
			$('.display-number-b li').eq(instructIndex).each(function(){
				$(this).addClass('current');
			});
		} else {
			alert('!');
		} 
	});
	
	
	$('#project-gallery .thumblink').click(function(){
		image = $(this).data('link');
		imageType = $(this).data('type');
		description = $(this).data('description');
		$('#gallery-main-image').fadeTo(200, 0, function(){
			$('#gallery-video').remove();
			if(imageType==='image'){
				
				$('#gallery-main-image img').show();
				$('#gallery-main-image img').attr('src', image);	
			} else {
				$('#gallery-main-image img').hide();
				$('#gallery-main-image').prepend('<iframe id="gallery-video" width="600" height="398" src="https://www.youtube.com/embed/'+image+'" frameborder="0" allowfullscreen></iframe>');
			}
			
			
			$('#gallery-description').html(description);
			$('#gallery-main-image').delay(200).fadeTo(200, 1);
		});
		
		
		
		
		
		
		
		$('#project-gallery .thumblink.current').removeClass('current');
		$(this).addClass('current');
	});
	
	

	if($('#project-tabs').length){
/*		
		var maxHeight = 0;

		$('#project-tabs .tab').each(function(){
			if($(this).height() > maxHeight) {
				maxHeight =$(this).height();
			}
		});
*/		

//		$('#project-tabs .tab').css('height', maxHeight + 90);
		
		$('#project-tabs').before('<ul id="tab-links"></ul>');
		$('#project-tabs .tab').each(function(){
			var myClass = "";
			if($(this).hasClass('current')){
				myClass=" current";
			}
			$('#tab-links').append('<li data-tab="#'+$(this).attr('id')+'" id="'+$(this).attr('id')+'-link" class="link'+myClass+'">'+$(this).find('h3').html()+'</li>');
		});
	}

	
	$('#tab-links li').click(function(){
		var myTab = $(this).data('tab');
		$('#tab-links .current').removeClass('current');
		$(myTab+'-link').addClass('current');
		$('#project-tabs .tab.current').removeClass('current');
		$(myTab).addClass('current');
	});

     function refresh() {
         if(new Date().getTime() - time >= 15000) {
	         // alert('test');
             location.assign(window.location);
         } else {
             setTimeout(refresh, 5000);
             }
     }
	
	if($('#signoutform').length) {
			var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function() {
         time = new Date().getTime();
     });
		setTimeout(refresh, 5000);	
	}
     
	
	$('#booking-link').click(function(e){
		e.preventDefault();
		$('#booking-calendar').addClass('reveal');
			$('#booking-calendar .close').click(function(){
				$('#booking-calendar').removeClass('reveal');		
			});
	});

	
	$('#faqs .title').click(function(){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
			
			$(this).parent().siblings().removeClass('active');		
		}
	});
	
	$('.panel.link, .tile').click(function(){
		var link = $(this).find('a').attr('href');
		document.location = link;
	});

	$('#menu-button a').click(function(e){
		e.preventDefault();
		$('body').removeClass('social-active');
		$('body').removeClass('search-active');
		$('body').removeClass('user-active');
		if($('body').hasClass('menu-active')){
			$('body').removeClass('menu-active');
			var scroll = $('#big-page-wrapper').scrollTop();	
		    if (scroll < 30) {
		        $("#site-title").removeClass("scroll");
		    }
		} else {
			$('body').addClass('menu-active');
			$("#site-title").addClass("scroll");
		}
	});
	

	if($('body').hasClass('search-results')){
		$('body').addClass('search-active');
	} else if($('body').hasClass('search-no-results')) {
		$('body').addClass('search-active');
		$('#s').val('');
		$('#s').focus();
	}
	
	$('#search-button a').click(function(e){
		e.preventDefault();
		$('body').removeClass('social-active');
		$('body').removeClass('menu-active');
		$('body').removeClass('user-active');
		if($('body').hasClass('search-active')){
			$('body').removeClass('search-active');
			$('#s').val('');
		} else {
			$('body').addClass('search-active');
			$('#s').focus();
			
		}
	});



	$('#social-button a').click(function(e){
		e.preventDefault();
		$('body').removeClass('search-active');
		$('body').removeClass('menu-active');
		$('body').removeClass('user-active');
		if($('body').hasClass('social-active')){
			$('body').removeClass('social-active');
		} else {
			$('body').addClass('social-active');
		}
	});
	
	var hash = window.location.hash.substring(1); 
	if(hash==='login'){
		$('body').addClass('user-active');
	}	

	$('#user-button a, #user-login-equipment').click(function(e){
		e.preventDefault();
		$('body').removeClass('search-active');
		$('body').removeClass('social-active');
		$('body').removeClass('menu-active');
		if($('body').hasClass('user-active')){
			$('body').removeClass('user-active');
		} else {
			$('body').addClass('user-active');
			
		}
	});

	
	$('#big-page-wrapper').scroll(function() {    
	    var scroll = $('#big-page-wrapper').scrollTop();	
	    if (scroll >= 30) {
	        $("#site-title").addClass("scroll");
	        
	    } else {
	        if(!$("#site-title").hasClass("scrollfixed")){
		        $("#site-title").removeClass("scroll");		        
	        }
	    }
	});
	

	
	
		
$("#home-panels .more").click(function(e) {
	e.preventDefault();
	var myScroll = $(this).attr('href');
    $('html, body, #big-page-wrapper').animate({
        scrollTop: $(myScroll).offset().top
    }, 500);
});
	
});