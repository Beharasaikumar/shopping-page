const imgs = document.querySelectorAll('.slider ul img');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

let n = 0;

function moveit(){
   for (let i = 0; i < imgs.length; i++) {
       imgs[i].style.display ='none';
   }
   imgs[n].style.display ='block';
}
moveit();

prev_btn.addEventListener('click' , (e)=>{
   if(n > 0){
    n--;
   }else{
    n = imgs.length - 1 ;
   }
   moveit();
})

next_btn.addEventListener('click' , (e)=>{
   if(n < imgs.length - 1){
    n++;
   }else{
    n = 0;
   }
   moveit();
})

const scroll_container = document.querySelectorAll('.products');
for ( const item of scroll_container){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evtdeltaY;
    });
}