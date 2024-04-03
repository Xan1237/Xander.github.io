//light color shcheme
//#DCC7AA
//F7C331
//F7882F

//dark color scheme
//#393f4d
//#1d1e22
//#feda6a

//constants for color change
const wasLightMode = localStorage.getItem('light');
const wasDarkMode = localStorage.getItem('dark');
localStorage.setItem('light', wasLightMode);
localStorage.setItem('dark', wasDarkMode)
const lightButton = document.querySelector("#light");
const body = document.querySelector("body");
const darkButton = document.querySelector("#dark");
const header = document.querySelector("header");
const variables = document.querySelector(":root");

//constants for form validation
const userName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const button = document.getElementById("submite");
const slider = document.getElementById("importance");
const radio = document.getElementsByName("ContactReason");
const radioError = document.getElementById("radioError");
const sliderError = document.getElementById("rangeError");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numberError = document.getElementById("numberError");
//light mode is pressed


const forme= document.getElementById("forme");
forme.addEventListener("submit", (event) =>{
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    numberError.innerHTML = "";
    sliderError.innerHTML="";
    radioError.innerHTML = "";
    let valid = true;
    event.preventDefault();
    if(userName.value.trim() == ""){
        nameError.innerHTML = "Please Give a Name";
         valid = false;
    }
    if(email.value.trim() == ""){
        emailError.innerHTML = "Please Enter an Email";
        valid = false;
    }
    if(number.value.trim() == ""){
        numberError.innerHTML = "Please Give a Phone Number";
        valid = false;
    }
    if(slider.value == "0"){
        sliderError.innerHTML="Please Select a Value";
        valid = false;
    }
    let radioChecked = false;
    radio.forEach(element => {
        if(element.checked){
            radioChecked = true;
        }
    });
    if(!radioChecked){
        radioError.innerHTML = "Pick One Option";
        valid = false;
    }
    if (valid) {
        // If all validations pass, submit the form
        forme.submit();
    }
});


//page is refreshed check if color sheme is presemt
function checkLightMode(){
    variables.style.setProperty("--errorColor", "#8b0000")
    if(localStorage.getItem('light')=="true"){
        variables.style.setProperty("--bodyColor", '#DCC7AA' );
        variables.style.setProperty("--backgroundColor", '#F7882F' );
        variables.style.setProperty("--textColor", '#000000' );
        variables.style.setProperty("--errorColor", "#0000FF");
        
    }
    //check if dark mode
    else if(localStorage.getItem('dark')=='true'){
        variables.style.setProperty("--backgroundColor", '#301934' );
        variables.style.setProperty("--bodyColor", '#00008B' );
        variables.style.setProperty("--textColor", '#d2b48c' );
    }
    //check if no color shcheme is present
    else{
        variables.style.setProperty("--bodyColor", '#808080' );
        variables.style.setProperty("--backgroundColor", '#4793d7' );
        variables.style.setProperty("--textColor", '#000000' );
    }
}
