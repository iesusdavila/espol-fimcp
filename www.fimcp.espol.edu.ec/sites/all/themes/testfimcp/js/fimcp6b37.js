// JavaScript Document
jQuery(document).ready(function($) { 
	$(".navbar-nav").addClass("pull-right");
	$(".region-sidebar-first").removeClass("well");
	$(".footer .menu").addClass("pull-right");
	//$(".view-id-eventos .views-row").addClass("row pad-tb-20");
	$(".region-noticias .view-id-eventos .views-field-field-foto").addClass("col-md-3");
	$(".region-noticias .view-id-eventos .views-field-field-foto").find("img").addClass("img-responsive img-thumbnail");
	$(".region-noticias .view-id-eventos .views-field-field-descripcion").addClass("col-md-9");
	$(".eve_foto").find("img").addClass("img-responsive img-thumbnail");
	$(".ev_imagen").find("img").addClass("img-responsive img-thumbnail");
	$(".no_imagen").find("img").addClass("img-responsive img-thumbnail");
	$(".view-eventos .views-row-2 .views-field-field-imagen-evento-front .field-content img").remove();
	$(".view-eventos .views-row-3 .views-field-field-imagen-evento-front .field-content img").remove();
	$(".view-eventos .views-row-4 .views-field-field-imagen-evento-front .field-content img").remove();
	
	$(".view-noticias .views-row-2 .views-field-field-imagen-front .field-content img").remove();
	$(".view-noticias .views-row-3 .views-field-field-imagen-front .field-content img").remove();
	$(".view-noticias .views-row-4 .views-field-field-imagen-front .field-content img").remove();

	$( ".region-noticias .views-row" ).addClass( "col-md-6" );	
	$( ".region-noticias .views-row-1" ).removeClass( "col-md-6" );
	$( ".region-noticias .views-row-1" ).addClass( "col-md-6" );
	
	$( ".region-noticias .views-row-2 .views-field-field-no-imagen" ).addClass( "hide" );
	$( ".region-noticias .views-row-3 .views-field-field-no-imagen" ).addClass( "hide" );
	$( ".region-noticias .views-row-4 .views-field-field-no-imagen" ).addClass( "hide" );
	$( ".region-noticias .views-row-4" ).addClass( "border0" );
	
	
	$( ".region-eventos .views-row-1" ).removeClass( "col-md-6" );
	$( ".region-eventos .views-row-1" ).addClass( "col-md-6" );
	$( ".region-eventos .views-row-2 .views-field-field-imagen" ).addClass( "hide" );
	$( ".region-eventos .views-row-3 .views-field-field-imagen" ).addClass( "hide" );
	$( ".region-eventos .views-row-4 .views-field-field-imagen" ).addClass( "hide" );
	$( ".region-eventos .views-row-4" ).addClass( "border0" );
	
	$( ".region-video-facultad" ).after( "<br/>" );
	
	$( ".region-slideshow .block-title" ).addClass( "hide");
	$( "#block-block-2 .block-title" ).addClass( "hide");//Redes Sociales
	
	$(".views_slideshow_pager_field_item" ).addClass("pager-item");
	$(".views-slideshow-controls-bottom" ).addClass("slideshow-controls");
	
	$(".views-content-counter" ).each(function() {
		$(this).html("•");
	});
	$(".more-link" ).each(function() {
		var a = $(this).find("a").html();
		$(this).find("a").html( a + " <img style='padding: 7px; float:right;' src='/sites/fimcp.espol.edu.ec/files/leer-mas.png' />");
	});
	
	/*FOOTER*/
	$(".region-pre-footer-2").find("input").addClass("input-sm");
	$(".region-pre-footer-2").find(".btn-default").addClass("btn-sm");
	
	/*Leer mas*/
	
	$("#ver-mas").click(function(){
		$("#ver-mas").addClass("hide");
        $("#info-oculta").fadeIn("slow");
    });

    $(".ver-mas a.link").click(function(){
		$(this).addClass("hide");
        $(this).parent().find(".ver-mas-info-oculta").fadeIn("slow");
    });
	
});