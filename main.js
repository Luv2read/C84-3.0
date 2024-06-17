// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d"); 

img_width = 300;
img_height = 100;

var img_image; 

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image(); // Define a variable with a new image
    img_imgTag.onload = uploadimg; // Set a function to load this variable
    img_imgTag.src = img_image;
}

function uploadimg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

// Handle keydown event
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("Key Pressed: " + keyPressed);

    if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
        // Alphabet keys (A-Z or a-z)
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an alphabet key.";
        console.log("Alphabet key");
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        // Number keys (0-9)
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key.";
        console.log("Number key");
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        // Arrow keys
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an arrow key.";
        console.log("Arrow key");
    } else if((keyPressed == 17) || (keyPressed == 18 || keyPressed == 27)) {
        // Special keys or others
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a special key or symbol.";
        console.log("Special key");
    }
    else {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed symol or other key"
    }
}

function alphabetkey() {
    img_image = "Alpkey.png"; // Set image URL for alphabet key
    add(); // Load and display the image
}

function numberkey() {
    img_image = "numkey.png";
    add(); 
}
function arrowkey() {
    img_image = "Arrkey.png"; 
    add(); 
}
function specialkey() {
    img_image = "spkey.png"; 
    add(); 
}

function otherkey()
{
    img_image = "otherkey";
    add();
}
