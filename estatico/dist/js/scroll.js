function scroll_animado(id){          
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
    'slow');
}