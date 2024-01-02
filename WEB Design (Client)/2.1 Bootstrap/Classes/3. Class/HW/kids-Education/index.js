var secondForm= document.querySelector("#second_form");
var fullName= secondForm.querySelector("div input[name=fullName]");
var email= secondForm.querySelector("div input[name=email]");
var submit= secondForm.querySelector("div button[type=submit]");
var message= secondForm.querySelector("div #message");
var count=1;
secondForm.addEventListener("submit",function(e){
    e.preventDefault();
    message.innerHTML="Your Registration is Successful";
    setTimeout(display,500);
    function display(){
        message.innerHTML="";
    }
    var person={
       fullName: fullName.value,
       email: email.value,
    }
    console.log("person = "+count++);
    console.log(`Name:${person.fullName}`);
    console.log(`Email:${person.email}`);
    fullName.value="";
    email.value=""; 
});