//Show Files Connected:
console.log("RUNNING...");

//Function to Generate a Random Image of Munch:

//The Array containing the Images:
let Images = [
    "Multimedia/witchEm.PNG",
    "Multimedia/babyEm.PNG",
    "MultiMedia/IMG_3531.JPG",
    "MultiMedia/IMG_9933.JPG",
    "MultiMedia/IMG_0766.JPG",
    "MultiMedia/XGZD0843.JPG",
    "MultiMedia/IMG_4835.JPG",
    "MultiMedia/NBWC2183.JPG",
    "MultiMedia/LROL5582.JPG",
    "MultiMedia/QUNF1740.JPG",
    "MultiMedia/GGGD2758.JPG",
    "MultiMedia/IMG_2013.JPG",
    "MultiMedia/IMG_1040.JPG",
    "MultiMedia/IMG_4834.JPG"
];

//Create the Table-Data Elements:
let td = document.createElement("td");

//Create the Image Element:
let img = document.createElement("img");

//DOM Manipulation Function:
function generateImage(event)
{
    let src = Images[Math.floor(Math.random() * Images.length)];
    img.setAttribute("src", src);
    td.setAttribute("id", "genImage");

    console.log(src);

    td.appendChild(img);
    document.body.appendChild(td);
}

//Function to ByPass the 403 and Gain Access to Main Page:
function enterMunch()
{
    let enteredName = document.forms["ChosenOne"]["textBox"].value;

    //Access to Main Denied:
    if (enteredName != "Munch")
    {
        alert("That is the WRONG Name of the CHOSEN ONE...Try Again.");
    }
    //Access to Main Granted:
    if (enteredName === "Munch")
    {
        open("Munch_BirthDay-Main.html");
    }
    //Rick-Roll:
    if (enteredName === "Rick")
    {
        open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}