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
  //this line checks if the value of n(the index of the currently displayed image) is greater than 0, if n is greater than 0, it means there is a previous image available to display
  if(n>0){
    //if the condition n>0 is true, this line decrements the value of n by 1 and moves n to the index of the previous image in the imgs array 
    n--;
  }
  //if the condition n>0 is false meaning there is no previous image (i.e n is already at the first image), the code inside the else block is executed
  else {
    //the code sets the value of n to index of the last image inthe imgs array and this effectively loops back to the last image when the previous button is clicked while viewing the first image
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
