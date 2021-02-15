const form= document.querySelector('#my-form');
const box= document.querySelector('#box');
const nameInput=document.querySelector(".form-group");
const btn=document.querySelector(".btn")
const fetch= document.querySelector(".fetch")
const inner= document.querySelector(".inner")
//form.addEventListener("submit", (e)=>{
  //  e.preventDefault();
    //console.log('hello')
//form.style.display="none";
//box.style.display="block";
//}
//)
//form scripting
form.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
        //to make form disapper
        form.style.display="none";
        box.style.display="block";
    //to confirm name input
    if (nameInput.value===""){
        alert("please enter name");
    }
    else{
        console.log("success")
    }
}

////texting name value

box.addEventListener("click", onClick);
function onClick(f){
    f.preventDefault()
const nameValue=nameInput.value;
console.log(nameValue);
//name value.lenght
 if(nameValue.length ==9){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>20</h2>"    
}
else if(nameValue.length ==8){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>38</h2>"    
}
 else if(nameValue.length ==7 ){
inner.classList.add('fetch');
  inner.innerHTML="<h4>Your Lucky Number is</h4><h2>17</h2>"  
}
else if(nameValue.length ==6){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>3</h2>"    
}
else if(nameValue.length ==5){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>31</h2>"    
}
else if(nameValue.length ==4){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>54</h2>"    
}
else if(nameValue.length ==3 || nameValue.length===11){
    inner.classList.add('fetch');
    inner.innerHTML="<h4>Your Lucky Number is</h4><h2>11</h2>"    
}
else{
    inner.classList.add('fetch');
    inner.innerHTML="<h4>You are</h4><h2>!Cursed</h2>"    
}
 btn.style.display="none";   

}