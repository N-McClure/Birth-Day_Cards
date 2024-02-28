console.log("Connected...Running...");

//Function to Generate a Random Image of Joey:

//The Array containing the Images:
let Images = [
    "MultiMedia/DSC01418.jpg",
    "MultiMedia/DSC01465.jpg",
    "MultiMedia/DSC01533.jpg",
    "MultiMedia/fruit.jpg",
    "MultiMedia/hairCuts.jpg",
    "MultiMedia/halloween.jpg",
    "MultiMedia/house.jpg",
    "MultiMedia/IMG_4347.jpg",
    "MultiMedia/latte.jpg",
    "MultiMedia/lights.jpg",
    "MultiMedia/molly.jpg",
    "MultiMedia/newYears.jpg",
    "MultiMedia/pool.jpg",
    "MultiMedia/pumpkin.jpg",
    "MultiMedia/raptors.jpg",
    "MultiMedia/sold.jpg",
    "MultiMedia/tfc.jpg",
    "MultiMedia/whiskey.jpg"
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