const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav");
hamburger.onclick = function(){
   if(nav.style.display==="block"){
    nav.style.display ="none"

   }else{
    nav.style.display="block"
   };

    };

    console.log(window.innerWidth);
    
