var slideShow = document.querySelectorAll("#picture");



for(var i=0; i < slideShow.length; i++){
    slideShow[i].addEventListener("click",function(){
        location.href="pictures.html"
});
}

