var a = document.getElementById("box");
var b=0;
a.addEventListener('click',function(){
    if(b==0){
    a.style.backgroundColor="yellow";
    a.style.borderColor="red";
    b=1;
    }
    else{
        a.style.backgroundColor="red";
        a.style.borderColor="black";
        b=0
    }
})
dispatchEvent.addEventListener()