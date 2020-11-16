$(".box").click(function(){

    console.log("Box was clicked")
    $(".box").css("background","lightgreen");
})
$(".box1").click(function(){
    console.log("Le Body changed")
    $("body").css("background", "black")
})
$(".box1").click(function(){
    console.log("Le Box grew")
    $(".box1").css("background", "red")
})

