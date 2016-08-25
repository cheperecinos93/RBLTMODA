 /*
 * Efecto creado por: Petr Tichy - Ihatetomatoes.net
 */

( function( $ ) {
	
	//Inicializando variables
	$window = $(window);
	$slide = $('.secciones');
	$body = $('body');
	
    //Desvaneciendo secciones   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Redimensionando secciones
		      adjustWindow();
		      
		      // Cargando secciones
			  $body.removeClass('cargando').addClass('cargado');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Inicializando Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Obteniendo tamaño de la ventana
	    winH = $window.height();
	    
	    // Manteniendo altura minima en 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Redimensionando las secciones
	    $slide.height(winH);
	    
	    // Actualizando Skrollr despues de redimensionar las secciones
	    s.refresh($('.secciones'));
	    
	}
		
} )( jQuery );