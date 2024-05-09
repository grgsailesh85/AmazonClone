# AmazonClone

A beginner-friendly Amazon clone built with HTML, CSS, and JavaScript for learning purposes.

Feel free to explore the code and use it as a reference for own learning journey in web development!

In this section, we'll provide a brief overview of the main functionalities implemented in the Amazon clone project and explain the logic behind them.

if(n>0){
    n--;
  } else {
    n = imgs.length-1;
  }
  
1.if (n > 0) { ... }

  a.This line checks if the value of n (the index of the currently displayed image) is 
    greater than 0.
  b.If n is greater than 0, it means there is a previous image available to display.

2.n--;

  a.If the condition n > 0 is true, this line decrements the value of n by 1.
  b.It moves n to the index of the previous image in the imgs array.

3.else { ... }

  a.If the condition n > 0 is false, meaning there is no previous image (i.e., n is 
    already at the first image), the code inside the else block is executed.

4.n = imgs.length - 1;

  a.In this case, the code sets the value of n to the index of the last image in the 
    imgs array.
  b.This effectively loops back to the last image when the previous button is clicked 
    while viewing the first image.
    
In summary, this block of code handles the logic for moving to the previous image in the slider. It checks if there is a previous image available, decrements the index n if possible, or sets it to the index of the last image if n is already at 0 (the first image). Finally, it updates the display to reflect the new image.



 
