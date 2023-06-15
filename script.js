
function ChangeToNextImage()  
{  
    x = (x === imageArray.length - 1) ? 0 : x + 1;  
    document.getElementById("BackgroundSlideshow")  
        .src = imageArray[x];  
}  
  
function ChangeToPreviousImage()  
{  
    x = (x <= 0) ? imageArray.length - 1 : x - 1;  
    document.getElementById("BackgroundSlideshow")  
        .src = imageArray[x];  
}  
  
function startTimer()  
{  
    setInterval(ChangeToNextImage, 3000);  
}  
var imageArray = [],  
    x = -1;  
imageArray[0] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event2.jpeg?raw=true";  
imageArray[1] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event3.png?raw=true";  
imageArray[2] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event4.jpg?raw=true";  
imageArray[3] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event5.jpeg?raw=true";  
imageArray[4] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event6.jpeg?raw=true";  
imageArray[5] = "https://github.com/sbevents/sbevents.github.io/blob/main/img/event1.jpg?raw=true";  

