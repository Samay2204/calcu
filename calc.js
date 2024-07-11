 const num1=document.querySelector(".num1");
 const num2=document.querySelector(".num2");

 const btn1=document.querySelector(".plus")
 const btn2=document.querySelector(".multiply")
 const btn3=document.querySelector(".minus")
 const btn4=document.querySelector(".divide")


 const out1=document.querySelector(".output")
 var sum;
 var mul;
 var sub;
 var div;


 function add(){
    
    sum=Number(num1.value)+Number(num2.value);
    
 }

function multiply(){
    mul=Number(num1.value)*Number(num2.value);
 }

 function subtract(){
    sub=Number(num1.value)-Number(num2.value);
 }

 function divide(){
    div=Number(num1.value)/Number(num2.value);
 }




// function calc(a,b,operator){
//     return operator(a,b)
    
// }

btn1.addEventListener("click",function (){
    var buttoninnerhtml=this.innerHTML
    add(buttoninnerhtml)
    out1.innerHTML=sum;
    
});

btn2.addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML
    multiply(buttoninnerhtml)
    out1.innerHTML=mul;
})

btn3.addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML
    subtract(buttoninnerhtml)
    out1.innerHTML=sub;
})

btn4.addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML
    divide(buttoninnerhtml)
    out1.innerHTML=div;
})








