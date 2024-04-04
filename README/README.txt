My website is hosted at https://xan1237.github.io/Xander.github.io/index.html (Bonus) copy paste in browser to get notification

List of Relative Paths:
videos/archeryvideo
images/ArcheryLandscape.jpeg
images/Baseball.jpg
images/favicon.ico
images/robotics.jpg
images/Rubiks.jpg
images/Rugby.jpg
images/Sculich.jpg
images/Tabletennis.jpg
images/Xander.jpg
videos/archeryvideo.mp4
images\purpleBack.png
images\orangeBack.png

File Structure:
A3_XN543440
    images
        ArcheryLandscape
        back.webp 
        Baseball.jpg 
        brain-removebg-preview.png
        cleanBack.jpg
        gamejam.jpg
        rangeBack.png
        paper.webp
        purpleBack.png
        robotics.jpg
        Rubiks.jpg
        Rugby.jpg
        Sculich.jpg
        star.jpeg
        Tabletennis.jpg
        Xander.jpg
        Xander2.jpg
    videos
        archeryvideo.mp4
    contactForm.html
    index.html
    personal.html
    professional.html
    Reflection.pdf
    script.js
    style.css
    validate.js



Code descriptions:
I reused some html from the previous assignment although a lot of the formatting is deffrent due to the change in requirments

Css discription same as previous assignment:
The navigation menu is consistent across all pages and consists of a flexbox layout with three elements in it that all link to 
three individual pages of the website. The first page is the hompage which is also comprised of a grid layout. It contains an image of myself
as a header. Underneeth this image there are two more columns of information. An about me section and a language experience.
The about me is simply a paragraph explaining some basic informartion. The language experience is a list of
programming languages I have some experience in. Finally at the end of this page and all pages on the site there is a 
footer that includes mailto and telephone links to contact me. This footer is styled with a flexbox layout.
Another page on the site is the personal information page. This page includes three picturesof three diffrent sports I play with three paragraphs 
underneeth the images. This page is styled with a grid layout for the body with the flexbox header and footer.
The final page on the website is the professional information page. This page is formated with grid areas and contains a personal 
project and achedemic achevments. The main focus of the page is the personal website so that is very big and full screen width when 
the page is oppen. Finally the css document is devided into three sections using comments. These sections are generally for every
individual website. Although there are some areas especially regarding the header and footer where the css tags are reused from diffrent
sections from the css code.

Dynamic serving =>
    My website dynamicly serves all three media types, computer, tablets, and phones. It does this by using a combination of the vw and vh and 
    media queries. The vw and vh are used in locations such as the width of the form text boxes to dynamicly change size depending on the width of the
    screen. I use media queries to change the orientation of the website weather thats the flex direction from row to column or the grid template to 
    something more mobile friendsly. The only change that had to be made for tablets was some font sizes to make sure they dont span over more than one 
    line. These media queries can all be found in the css file under their respective comments.

JavaScript discription:

eventListener + colorChanger + conditional statment + notification =>
    There are Three JavaScript files connected to this website script.js and validate.js
    script.js focues on the color changes aspect of the website that can switch in between light and dark mode. 
    The file is composed of three main functions:

    The change function is called when the light mode button is presssed using an event listener. It also uses the window storage "light" and the wasLighMode 
    variable to swich between light and normal mode.

    The darkChange function is called when the dark button is pressed using an eventlister. It does the same thing but 
    instead it uses the dark stored variable using localstorege and the wasDarkmode variable. 

    Finally the checkLightMode is my added website element that uses if elseif and else statments. When the website body loads it checks weather 
    the stored variable in light is true and then if so it loads the apropriate color scheme. The elseif statment then checks if the dark stored 
    variable is true and swiches the the apropriate color scheme. Finally if neither of the variables are true it reverts to the original color 
    scheme of the website. This function is called when the body of each webpage loads to check the color scheme.

    To fill out the eventListener requirment I have a button on the baseball picutre on the personal web page that gives an alert if the user
    wants to know who took the picture. This is found in the credits js file as well as the checkLightMode function. 

    I use a notification to welcome people to my website. It works on the hosted version of the website but not the local I figure its some thing with
    how browsers work with local websites. I also added a feature to that is does spam you with the notification on every refresh using localstorege.

Form validation =>
    The form validation is all found in the validation.js code file. It uses an arrow function to verify the form elements before it can be submited.
    The first conditionals are to check if the form elements are empty. For the text boxes the JavaScript checks if the input is equal to an empty string.
    For the radio buttons it uses a foreach loop to iterate and check if one of the buttons is checked. Finally for the slider if the value is equal to 
    0. If any of those conditions are true it sets a variable (valid) to false to prevent form submision and then sets the inner html values to display
    an error message. To continue on this subject a pattern is used to validate the phone number to make sure its in the form 000-000-0000.
Acessibility =>
    I used the wave Acessibility tool to make sure there were no errors with Acessibility guidelines. I also made certain that the color changes
    do not cause contrast probelms. The only issue the wave too flagged was a heading level error that I resolved by not skipping to h3 and using
    an h2 tag instead. i Also addded some aria atributes to my navigation bar and alt text to images.

Bibliographie
Clean background vector art, icons, and graphics for free download (no date) Vecteezy. Available at: 
https://www.vecteezy.com/free-vector/clean-background (Accessed: 09 March 2024). 
Clean background vector art, icons, and graphics for free download (no date a) Vecteezy. Available at: 
https://www.vecteezy.com/free-vector/clean-background (Accessed: 09 March 2024). 
Sanders, L. (2023) What a look at more than 3,000 kinds of cells in the human brain tells us, Science News. Available at: 
https://www.sciencenews.org/article/human-brain-cells-new-census (Accessed: 09 March 2024). 
Brown, X.T. (no date) Image repository from Xander Brown, Xander browns image repository. 