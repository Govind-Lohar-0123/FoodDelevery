////////Background Imge//////////
import $ from "jquery";

// let slider=document.querySelector(".slider-div");
var pages = "";
var slides ="";
var idx=0;

$(document).ready(() => {
    pages = document.querySelectorAll(".paginate > li");
    slides = document.querySelectorAll(".slide");
    console.log(slides);
    slides[0].style.left="0";
    function sliderChange(e) {
        console.log(e);
        let btnName=e.target.getAttribute("id");
       
        if(btnName=="prev" ){
            if(idx>0){
                slides[idx--].style.left="-200%";
                slides[idx].style.left="0%";
            }
        }
        else if(btnName=="next" ){
            if(idx<slides.length-1){
                
                slides[idx++].style.left="200%";
                slides[idx].style.left="0%";
            }
        }
        else{
            if(btnName-1>idx){
                slides[idx].style.left="200%";
                slides[btnName-1].style.left="0%";
            }
            else if(btnName-1<idx){
                slides[idx].style.left="-200%";
                slides[btnName-1].style.left="0%";
                
            }
            idx=btnName-1;
        }
        
          
    }




    pages.forEach((page) => {
        page.addEventListener("click", sliderChange,true);
    })

})



// authentication/
$(document).ready(() => {
    var login=document.querySelector(".login-btn");
    var signUp=document.querySelector(".register-btn");
    var loginForm=document.querySelector("#login");
    var signUpForm=document.querySelector("#register");
    var loginClose=document.querySelector(".close-login");
    var signUpClose=document.querySelector(".close-register");
    console.log(login,signUp)
    login.addEventListener("click",(e)=>{
        e.preventDefault();
        signUpForm.classList.add("d-none");
        loginForm.classList.remove("d-none");
    })
    signUp.addEventListener("click",(e)=>{
        e.preventDefault();

        signUpForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
    })

    loginClose.addEventListener("click",(e)=>{
        e.preventDefault();
        loginForm.classList.add("d-none");
        signUpForm.classList.add("d-none");
    })
    signUpClose.addEventListener("click",(e)=>{
        e.preventDefault();
        loginForm.classList.add("d-none");
        signUpForm.classList.add("d-none");
    })
})

