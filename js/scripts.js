 $(document).ready(function(){

     /* ************************************************************************ */
     /* Header */
     /* ************************************************************************ */
     // Adicione aqui o logo salve na pasta img e adicione o nome a var logo
   var logo = "logo-trasparencia.png";
   $("#logo-link").html("<img src='./img/"+logo+" 'alt='logo papelaria m&e' id='logo'>");
   /* ************************************************************************ */
     // Adicione aqui o primeiro item do menu
   var menu1 = "Home";
   $("#menu1").html("<span>"+menu1+"</span>");
   /* ************************************************************************ */
     // Adicione aqui o segundo item do menu
   var menu2 = "Features";
   $("#menu2").html("<span>"+menu2+"</span>");
   /* ************************************************************************ */
     // Adicione aqui o terceiro item do menu
   var menu3 = "Princing";
   $("#menu3").html("<span>"+menu3+"</span>");
   /* ************************************************************************ */
     // Adicione aqui o quarto item do menu
   var menu4 = "Product";
   $("#menu4").html("<span>"+menu4+"</span>");
   /* ************************************************************************ */

   
   /* ************************************************************************ */
   /* Footer contacts section */
   /* ************************************************************************ */
   // Adicione aqui o telefone
    var phone = "(11) 9-9999-9999";
    // Adicione aqui o E-mail
    var email = "seuemail@seudominio.com.br"

    $("footer").html( "  <div class='container'><h2>Papelaria M&E</h2><div class='contact'> <ul><li id='phone'>"+phone+"</li><li id='email'>"+email+"</li></ul></div></div>" ); 

    /* ************************************************************************ */




});
       

