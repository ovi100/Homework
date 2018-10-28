/*------------------------------------
 *Author:MD ABU SAYED
 *Template:Sreda
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	$('[data-fancybox="images"]').fancybox({
	  protect: true,
	  preventCaptionOverlap: true,
	  buttons : [
	    'zoom',
	    'thumbs',
	    'close',
	    'slideShow'
	  ]
	});

	// $( ".fancybox-image-wrap img" ).hover(
	// 	function() {
	//     	$(".fancybox-caption").css('visibility', 'visible');
	//   }
	  
	// );


});


// Header Sidebar

$(function(){

	$(".header-left-icon .header-sidebar .sidebar-body").hide();

	$(document).on('click', '.header-left-icon .header-sidebar .btn-sidebar', function() {
		$(".header-left-icon .header-sidebar .sidebar-body").fadeIn();
		$(".header-left-icon .header-sidebar").addClass('active');
		$(".header-left-icon .header-sidebar .btn-sidebar").addClass('active');
	});

	$(document).on('click', '.header-left-icon .header-sidebar .sidebar-body .close', function() {
		$(".header-left-icon .header-sidebar .sidebar-body").fadeOut();
		$(".header-left-icon .header-sidebar").removeClass('active');
		$(".header-left-icon .header-sidebar .btn-sidebar").removeClass('active');
	});

});

