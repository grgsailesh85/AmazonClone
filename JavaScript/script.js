const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");


// 'n' will be used to keep track of the index of the currently displayed image.
let n = 0;

function changeSlide(){
  //iterates over all the images('imgs') in the slider
  for (let i=0; i<imgs.length; i++){
    //sets the 'display' CSS property of each image to 'none' effectively hiding them all
    imgs[i].style.display = 'none';
  }
  // this line sets the 'display' property of the image at index 'n' to 'block' making it visible  
  imgs[n].style.display = 'block';
}
//immediately after defining the 'changeSlide' function this line calls it and ensures that when the script runs, it starts by displaying the first image.
changeSlide();

prev_btn.addEventListener('click',(e)=>{
  if(n>0){
    n--;
  }
  else {
    n = imgs.length-1;
  }
  changeSlide();
})
next_btn.addEventListener('click',(e)=>{

  if(n<imgs.length - 1){
    n++;
  } else {
    n = 0;
  }
  changeSlide();
})




const scrollContainer = document.querySelectorAll("products");

for (const item of scrollContainer){
  item.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  })
}
