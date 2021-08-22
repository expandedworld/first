var slideShow = document.querySelectorAll("#picture");

for(var i=0; i < slideShow.length; i++){
    slideShow[i].addEventListener("click",function(){
        location.href="pictures.html"
});
}


var box = document.querySelector("#box");
box.addEventListener("click",function(){
    location.href="sentences.html"
});
