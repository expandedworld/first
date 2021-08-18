var view = document.querySelectorAll("#view");
var detail = document.querySelectorAll(".detail");
var texthidden = document.querySelectorAll("#texthidden");


/*상세 설명 보기*/
for(let i=0; i < view.length; i++) {
        view[i].addEventListener("click", function(){
        let detail_item = detail[i]
        detail_item.style.display = "block";
        view[i].style.display = "none";
        });
}

/*for(i=0; i < texthidden.length; i++) {
    texthidden[i].addEventListener("click", function(){
    let detail_item3 = detail[i]
    detail_item3.style.display = "none";
    view[i].style.display = "block";
    });
}*/


/*상세 설명 닫기*/
texthidden[0].addEventListener("click", function(){
    detail[0].style.display = "none";
    view[0].style.display = "block";
});

texthidden[1].addEventListener("click", function(){
    detail[1].style.display = "none";
    view[1].style.display = "block";
});

texthidden[2].addEventListener("click", function(){
    detail[2].style.display = "none";
    view[2].style.display = "block";
});

texthidden[3].addEventListener("click", function(){
    detail[3].style.display = "none";
    view[3].style.display = "block";
});

texthidden[4].addEventListener("click", function(){
    detail[4].style.display = "none";
    view[4].style.display = "block";
});

texthidden[5].addEventListener("click", function(){
    detail[5].style.display = "none";
    view[5].style.display = "block";
});

texthidden[6].addEventListener("click", function(){
    detail[6].style.display = "none";
    view[6].style.display = "block";
});


/*상세 설명 모두 닫기*/
function cl() {
    for(i=0; i < detail.length; i++){
        let detail_item2 = detail[i]
        detail_item2.style.display = "none";
        view[i].style.display = "block";
    }
}









/*else {
    view[i].addEventListener("click", function(){
    let detail_item2 = detail[i]
    detail_item2.style.display = "none";
    view[i].innerText = "상세 설명 보기";
    isOpen = false;
    });
}*/


/*var view2 = document.querySelector("#view2");
let isOpen2 = false;
view2.addEventListener("click", function(){
    if(isOpen2 == false) {
        document.querySelector("#detail2").style.display = "block";
        view2.innerText = "상세 설명 닫기";
        isOpen2 = true;
    }
    else {
        document.querySelector("#detail2").style.display = "none";
        view2.innerText = "상세 설명 보기";
        isOpen2 = false;
    }
});


var view3 = document.querySelector("#view3");
let isOpen3 = false;
view3.addEventListener("click", function(){
    if(isOpen3 == false) {
        document.querySelector("#detail3").style.display = "block";
        view3.innerText = "상세 설명 닫기";
        isOpen3 = true;
    }
    else {
        document.querySelector("#detail3").style.display = "none";
        view3.innerText = "상세 설명 보기";
        isOpen3 = false;
    }
});


var view4 = document.querySelector("#view4");
let isOpen4 = false;
view4.addEventListener("click", function(){
    if(isOpen4 == false) {
        document.querySelector("#detail4").style.display = "block";
        view4.innerText = "상세 설명 닫기";
        isOpen4 = true;
    }
    else {
        document.querySelector("#detail4").style.display = "none";
        view4.innerText = "상세 설명 보기";
        isOpen4 = false;
    }
});

var view5 = document.querySelector("#view5");
let isOpen5 = false;
view5.addEventListener("click", function(){
    if(isOpen5 == false) {
        document.querySelector("#detail5").style.display = "block";
        view5.innerText = "상세 설명 닫기";
        isOpen5 = true;
    }
    else {
        document.querySelector("#detail5").style.display = "none";
        view5.innerText = "상세 설명 보기";
        isOpen5 = false;
    }
});

var view6 = document.querySelector("#view6");
let isOpen6 = false;
view6.addEventListener("click", function(){
    if(isOpen6 == false) {
        document.querySelector("#detail6").style.display = "block";
        view6.innerText = "상세 설명 닫기";
        isOpen6 = true;
    }
    else {
        document.querySelector("#detail6").style.display = "none";
        view6.innerText = "상세 설명 보기";
        isOpen6 = false;
    }
});

var view7 = document.querySelector("#view7");
let isOpen7 = false;
view7.addEventListener("click", function(){
    if(isOpen7 == false) {
        document.querySelector("#detail7").style.display = "block";
        view7.innerText = "상세 설명 닫기";
        isOpen7 = true;
    }
    else {
        document.querySelector("#detail7").style.display = "none";
        view7.innerText = "상세 설명 보기";
        isOpen7 = false;
    }
});*/