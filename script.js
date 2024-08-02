
var sidebar = document.querySelector(".navigation");

var btn = document.querySelector("#bar i")
btn.addEventListener("click",function(){
    if(btn.classList.contains("fa-bars")){
       btn.classList.remove("fa-bars")
       btn.classList.add("fa-times")
       sidebar.style.display = "block"
    }
    else if(btn.classList.contains("fa-times")){
       btn.classList.remove("fa-times")
       btn.classList.add("fa-bars")
       sidebar.style.display = "none"
    }
})