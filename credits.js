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
const textButton = document.getElementById("hideText");
const para = document.getElementById("baseball");
textButton.addEventListener("click", () =>{
    window.alert("Photo taken by Tim Brown")
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
