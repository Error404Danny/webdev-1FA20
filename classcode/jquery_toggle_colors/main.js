//clicking the box can change colors back and forth
//using a value

let clickToggle = true;

$(".box").click(function() {

    if(clickToggle ==true){
        $(".box").css("background", "blue");
    }else {
        $(".box").css("background", "orange");
    }
    clickToggle = !clickToggle;
})