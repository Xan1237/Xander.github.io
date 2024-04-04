//light color shcheme
//#DCC7AA
//F7C331
//F7882F

//dark color scheme
//#393f4d
//#1d1e22
//#feda6a
if("Notification" in window){
    if(Notification.permission ==  "granted"){
        notify();
    }
    else{
        Notification.requestPermission().then((res) =>{
            if(res =="granted"){
                notify();
            }
        });
    }
}
function notify(){
    const notification = new Notification("Welcome to My website!", {
        body: "Welcome!"
    });
}
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

//light mode is pressed
lightButton.addEventListener("click", function change(event){
    const wasLightMode = localStorage.getItem('light') === 'true';
    localStorage.setItem('light', !wasLightMode);
    localStorage.setItem('dark', 'false');
    if(localStorage.getItem('light')=="true"){
        variables.style.setProperty("--bodyColor", '#DCC7AA' );
        variables.style.setProperty("--backgroundColor", '#F7882F' );
        header.style.setProperty("background-image", 'url(images/orangeBack.png');
        variables.style.setProperty("--textColor", '#000000' );
    }
    else {
        variables.style.setProperty("--bodyColor", '#808080' );
        variables.style.setProperty("--backgroundColor", '#4793d7' );
        header.style.setProperty("background-image", 'url(images/cleanBack2.jpg');
        variables.style.setProperty("--textColor", '#000000' );
     }
});

//dark mode is pressed
darkButton.addEventListener("click", function darkchange(event){
    const wasDarkMode = localStorage.getItem('dark') === 'true';
    localStorage.setItem('dark', !wasDarkMode);
    localStorage.setItem('light', 'false');
    if(localStorage.getItem('dark')=='true'){
        variables.style.setProperty("--backgroundColor", '#301934' );
        variables.style.setProperty("--bodyColor", '#00008B' );
        variables.style.setProperty("--textColor", '#d2b48c' );
        header.style.setProperty("background-image", "url(images/purpleBack.png");
    }
    else {
        variables.style.setProperty("--backgroundColor", '#4793d7' );
        variables.style.setProperty("--bodyColor", '#808080' );
        variables.style.setProperty("--textColor", '#000000' );
        header.style.setProperty("background-image", 'url(images/cleanBack2.jpg');
    }
});
//page is refreshed check if color sheme is presemt
function checkLightMode(){
    //check if light mode
    if(localStorage.getItem('light')=="true"){
        console.log(localStorage.getItem('light'));
        variables.style.setProperty("--bodyColor", '#DCC7AA' );
        variables.style.setProperty("--backgroundColor", '#F7882F' );
        header.style.setProperty("background-image", 'url(images/orangeBack.png)');
        variables.style.setProperty("--textColor", '#000000' );
        
    }
    //check if dark mode
    else if(localStorage.getItem('dark')=='true'){
        variables.style.setProperty("--backgroundColor", '#301934' );
        variables.style.setProperty("--bodyColor", '#00008B' );
        variables.style.setProperty("--textColor", '#d2b48c' );
        header.style.setProperty("background-image", "url(images/purpleBack.png)");
    }
    //check if no color shcheme is present
    else{
        variables.style.setProperty("--bodyColor", '#808080' );
        variables.style.setProperty("--backgroundColor", '#4793d7' );
        header.style.setProperty("background-image", "url(images/cleanBack2.jpg)");
        variables.style.setProperty("--textColor", '#000000' );
    }
}
