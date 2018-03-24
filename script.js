var canvas = document.getElementById("myCanvas"),
context = canvas.getContext("2d");
var xtext = 20;
var x = 20;
var y = 20;
var onX = 20;
var onY = 10;
var unsortedArray;
var array;
var start = Date.now();
var timer;
var sortingArray;
var wholetimer;


var btn = document.getElementById('sort');
btn.addEventListener("click", function(){
    context.clearRect(0,0,350,200);
    var unsorted = document.getElementById("in1").value;  
    unsortedArray = unsorted.split(',').map(function(item) {
        return parseInt(item, 10);
    });  
    context.font = "16px Verdana";
    
    //drawSortedArray(unsortedArray);
    array=mergeSort(unsortedArray);
    //drawSortedArray(array);
    
});



function fade(y,t, f){  
  var fps = f || 10; 
  var time = t || 500; 
  var steps = time / (1000 / fps);   
  var op = 1;
    
  var d0 = op / steps; 
  var timer = setInterval(function(){
    op -= d0;
    steps--;
    y += op;
    if(steps <= 0){
    clearInterval(timer);
         }
}, (1000 / fps));
}






    


function drawUnsortedArray(time){
        for(var i=0; i<unsortedArray.length; i++){  
        context.fillText(unsortedArray[i], xtext, 180);
        context.fillRect(x,y,onX, unsortedArray[i] );
        xtext=xtext+23;
        x=x+onX+3;
    }
    }
function clearUnsortedArray(time){
        for(var i=0; i<unsortedArray.length; i++){  
        //context.clearText(unsortedArray[i], xtext, 180);
        context.clearRect(x,y,onX, onY*unsortedArray[i] );
        xtext=xtext+23;
        x=x+onX+3;
    }
    }

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}

function drawSortedAsync(sorted) {
    (function() {
        setTimeout(function () { drawSortedArray(sorted); }, 500*i++, sorted);
    })();
    
}

function drawSortedArray(arr){
    context.clearRect(0,0,350,200)
    
    var xtext1 = xtext;
    var x1 = x;
      for(var i=0; i<arr.length; i++){  
        context.fillText(arr[i], xtext1, 180);
        context.fillRect(x1,y,onX, onY*arr[i] );
        xtext1=xtext1+23;
        x1=x1+onX+3;
 } 
}  

var i = 0;
function merge(left, right)
{
    var result = [];
    var timeout = 1000;
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
    
    drawSortedAsync(result);

    return result;
    
}

