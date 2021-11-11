'use script'
{
 const hamburger = document.getElementById('hamburger');
 const hamburgerMenu=document.getElementById('hamburger-menu');

 hamburger.addEventListener('click',function(){
    hamburger.classList.toggle("open");
    hamburgerMenu.classList.toggle("open");
    
 });
}