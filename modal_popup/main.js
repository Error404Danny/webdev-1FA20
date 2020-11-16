let clickToggle = true;
let closeToggle = true;
$('#boxstart').click(function(){
    if(clickToggle ==true){
        $('#popupshow').css("opacity","1");  
    }else{
        $('#popupshow').css("opacity", "0");
    }
    if(clickToggle ==true){
        $('body').css("background-color","black");  
    }else{
        $('body').css("background-color", "tomato");
    }
    if(clickToggle ==true){
        $('#boxstart').css("background-color","black");  
    }else{
        $('#boxstart').css("background-color", "black");
    }
    if(clickToggle ==true){
        $('header').css("background","white");  
    }else{
        $('header').css("background", "white");
    }
    if(closeToggle ==true){
        $('a').css("opacity", "0")
    }else{
        $('body').css("opacity","0")
    }
})
$('.close').click(function(){

    if(closeToggle ==true){
        $('body').css("background-color", "tomato")
    }else{
        $('body').css("background-color","black")
    }
    if(closeToggle ==true){
        $('body').css("background-color", "tomato")
    }else{
        $('boxstart').css("background-color","teal")
    }
    if(closeToggle ==true){
        $('header').css("background-color", "tomato")
    }else{
        $('body').css("background-color","white")
    }
    if(closeToggle ==true){
        $('#popupshow').css("opacity","0")
    }else{
        $('#popupshow').css("opacity","0")
    }
    if(closeToggle ==true){
        $('body').css("background-color", "tomato")
    }else{
        $('body').css("background-color","black")
    }
    if(closeToggle ==true){
        $('#boxstart').css("background-color", "teal")
    }else{
        $('#boxstart').css("background-color","teal")
    }
    if(closeToggle ==true){
        $('a').css("opacity", "1")
    }else{
        $('body').css("opacity","1")
    }
})