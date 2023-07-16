var button = 1;

var time = "150ms";

setInterval(function(){
    if(button == 1){
        carouselLeft();
    }
    else{
        carouselRight();
    }
},5000);

function carouselLeft(){
    button = 2;
    changeBtnColor();
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    img1.style.transform = 'translateX(-100%)';
    img2.style.transform = 'translateX(0%)';
    img1.style.transitionDuration = time;
    img2.style.transitionDuration = time;
}

function carouselRight(){
    button = 1;
    changeBtnColor();
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    img1.style.transform = 'translateX(0%)';
    img2.style.transform = 'translateX(100%)';
    img1.style.transitionDuration = time;
    img2.style.transitionDuration = time;
}

function changeBtnColor(){
    if(button == 2){
        document.getElementById("changeImg1").style.backgroundColor = "#e3e3e3";  
        document.getElementById("changeImg2").style.backgroundColor = "rgba(228,0,43,1)"; 
    }
    else{
        document.getElementById("changeImg1").style.backgroundColor = "rgba(228,0,43,1)";  
        document.getElementById("changeImg2").style.backgroundColor = "#e3e3e3";      
    }
}