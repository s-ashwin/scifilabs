$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax()
    $('.sidenav').sidenav();
    $('.slider').slider({fullWidth: true});
    
  });

 function modalstart(){
    var instance = M.Modal.getInstance($('#modal1'));
    instance.open();
 }
