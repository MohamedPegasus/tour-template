var icons = document.querySelector(".icons");
var navbar = document.querySelector(".navbar");
icons.onclick = function(){
    icons.classList.toggle("active");
    navbar.classList.toggle("active");
}
    document.onclick = function(e){
        if(! icons.contains(e.target) && ! navbar.contains(e.target)){
            icons.classList.remove("active");
            navbar.classList.remove("active")
        }
    }


window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll" , appear);
function appear(){
    var appears =document.querySelectorAll(".feat");
    for(var i = 0 ;i < appears.length; i++){
        var windowheight = window.innerHeight;
        var appeartop = appears[i].getBoundingClientRect().top;
        var appearpoint = 150;
        if(appeartop < windowheight -appearpoint){
            appears[i].classList.add('active')
        }
        else{
            appears[i].classList.remove('active')
        }
    }
}