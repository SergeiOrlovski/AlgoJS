var canvas = document.getElementById("myCanvas"),
context = canvas.getContext("2d");
var xtext = 23;
var x = 20;
var y = 20;
var onX = 20;
var onY = 10;
var intermedArray = []; 

var btn = document.getElementById('sort');
btn.addEventListener("click", function(){
    context.clearRect(0,0,context.canvas.width,canvas.height);
    var unsorted = document.getElementById("in1").value;  
    unsortedArray = unsorted.split(',').map(function(item) {
        return parseInt(item, 10);
    }); 
   var maxNum = Math.max.apply(null, unsortedArray);
    debugger;
    context.canvas.width = unsortedArray.length*20+40+unsortedArray.length*3;
    context.canvas.height = maxNum*onY+80;

    array=mergeSOrt(unsortedArray);
    intermedArray.reverse(); 
for (var i = 0; i < intermedArray.length; i++) { 
(function() { 
setTimeout(function() { drawSortedArray(intermedArray.pop().split(',').map(function(item) { 
return parseInt(item, 10); 
}));}, i * 50); 
})(i); 
} 
}); 


function drawSortedArray(arr){  
    var xtext1 = xtext; 
    var x1 = x; 
    for(var i=0; i<arr.length; i++){ 
        context.clearRect(x1,y,onX, context.canvas.height );
        context.fillStyle = 'Yellow';
        //context.font = "10px Verdana";
        context.fillText(arr[i], xtext1, context.canvas.height-20); 
        context.fillStyle = 'Black';
        context.fillRect(x1,y,onX, onY*arr[i] ); 
        xtext1=xtext1+23; 
        x1=x1+onX+3; 
    } 
} 

function mergeSOrt(arr){
    if(arr.length<=1){
        return arr;
    }
    if(intermedArray!=[]){
       intermedArray.push(arr.toString());
       }
    var mid = Math.floor(arr.length/2);
    var a = mergeSOrt(arr.slice(0,mid));
    var b = mergeSOrt(arr.slice(mid));
    
    var result = [];
    var indexA = 0;
    var indexB = 0;
    while(indexA<a.length&&indexB<b.length){
        var elementA = a[indexA];
        var elementB = b[indexB];
        
        if(elementA<=elementB){
            result.push(elementA);
            indexA+=1;
        }else {
            result.push(elementB);
            indexB+=1;
        }
    }
    while(indexA<a.length){
        result.push(a[indexA]);
        indexA+=1;
    }
    while(indexB< b.length){
        result.push(b[indexB]);
        indexB+=1;
    }
    var promArr = result;
        debugger;
        intermedArray.push(result.toString());
    
    
    return result;
}
