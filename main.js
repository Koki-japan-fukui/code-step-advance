'use script'
{
 const hamburger = document.getElementById('hamburger');
 const hamburgerMenu=document.getElementById('hamburger-menu');
 const mask=document.getElementById('mask');

 hamburger.addEventListener('click',function(){
    hamburger.classList.toggle("open");
    hamburgerMenu.classList.toggle("open");
    mask.classList.toggle("open");
    
 });

 const targets=document.querySelectorAll(".itemImage");

 function callback(entries,obs){
    entries.forEach(entry=>{
       if(!entry.isIntersecting){
          return;
       }
       entry.target.classList.add('fadeIn')
       obs.unobserve(entry.target);
    });
 }
 
 const observer= new IntersectionObserver(callback);
    targets.forEach(target=>{
    observer.observe(target);
    });
 
}