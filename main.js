/** @format */

jQuery(document).ready(function($) {
	let suf = '';
  
  setTimeout(function(){
  var current = window.location.href;
  suf = current.slice(-4, -1);
  var current = current.split(`#elementor-tab-title-${suf}`);
  if(current.length>1) {	
        $('.elementor-tab-title').removeClass('elementor-active');
        $('.elementor-tab-title[data-tab="'+current[1]+'"]').addClass('elementor-active');
        $('.elementor-tab-content').hide();
        $('.elementor-tab-content[data-tab="'+current[1]+'"]').show();
    }
  }, 200);

		$('.elementor-tab-title[data-tab]').click(function(){
			var current_location = window.location.href;
			current_location = current_location.split(`#${suf}`);
			window.location = current_location[0]+'#elementor-tab-title'+$(this).attr('data-tab');
		})
});