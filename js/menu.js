/*toggle로 css 바꿔치기*/

var element = document.getElementById("menu");
var open_menu = document.getElementById("open_menu");
var close_menu = document.getElementById("close_menu");

function toggle() {
	element.classList.toggle("menu-click");
}

open_menu.addEventListener("click",function(){
	open_menu.style.display = "none";
	close_menu.style.display = "block";
});

close_menu.addEventListener("click",function(){
	open_menu.style.display = "block";
	close_menu.style.display = "none";
});