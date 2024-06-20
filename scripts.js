/* Allison Hua
   4-9-24
   Snapchat Academy : Project Assessment : JS dynamically modifies HTML */ 

const headWear = [ 
   { name: "baseballcap", image: "images/baseballcap.png" },
   { name: "colorfulheadphones", image: "images/colorfulheadphones.png" },
   { name: "cowboyhat", image: "images/cowboyhat.png" },
   { name: "gameboybeanie", image: "images/gameboybeanie.png" },
   { name: "heartsunglasses", image: "images/heartsunglasses.png" } ];
const accessoryWear = [
   { name: "bluesatinbowtie", image: "images/bluesatinbowtie.png" },
   { name: "bluediamondearrings", image: "images/bluediamondearrings.png" },
   { name: "catearrings", image: "images/catearrings.png" }, 
   { name: "sapphirenecklace", image: "images/sapphirenecklace.png" },
   { name: "silverchain", image: "images/silverchain.png" } ];
const dressWear = [
   { name: "boldbluecoat", image: "images/boldbluecoat.png" },
   { name: "bluepoofydress", image: "images/bluepoofydress.png" },
   { name: "cartoondress", image: "images/cartoondress.png" },
   { name: "maiddress", image: "images/maiddress.png" },
   { name: "starryreddress", image: "images/starryreddress.png" } ];
const topWear = [ 
   { name: "colorfulpufferjacket", image: "images/colorfulpufferjacket.png" },
   { name: "ducksweater", image: "images/ducksweater.png" },
   { name: "groothoodie", image: "images/groothoodie.png" },
   { name: "kuromilongsleeve", image: "images/kuromilongsleeve.png" },
   { name: "princesstshirt", image: "images/princesstshirt.png" } ];
const bagWear = [ 
   { name: "dorabackpack", image: "images/dorabackpack.png" },
   { name: "denimbackpack1", image: "images/denimbackpack1.png" },
   { name: "mymelodybackpack2", image: "images/mymelodybackpack2.png" },
   { name: "newjeansbag", image: "images/newjeansbag.png" },
   { name: "redpurse", image: "images/redpurse.png" } ];
const bottomWear = [ 
   { name: "blueskirt", image: "images/blueskirt.png" },
   { name: "duckpajamas", image: "images/duckpajamas.png" }, 
   { name: "flaredjeans", image: "images/flaredjeans.png" },
   { name: "narutopants", image: "images/narutopants.png" },
   { name: "spideykittypajamas", image: "images/spideykittypajamas.png" } ];
const feetWear = [ 
   { name: "balletflats", image: "images/balletflats.png" },
   { name: "barbieheels", image: "images/barbieheels.png" },
   { name: "blackhightopsneakers", image: "images/blackhightopsneakers.png" },
   { name: "cowboyboots", image: "images/cowboyboots.png" },
   { name: "starboyboots", image: "images/starboyboots.png" } ];
const backgrounds = [ 
   { name: "aotbackground", image: "images/aotbackground.png" },
   { name: "galaxybackground", image: "images/galaxybackground.png" },
   { name: "rainbowbackground", image: "images/rainbowbackground.png" },
   { name: "skylinebackground", image: "images/skylinebackground.png" },
   { name: "streetbackground", image: "images/streetbackground.png" } ]

var look1 = [ "", "", "", "", "", "", "" ];
var look2 = [ "", "", "", "", "", "", "" ];
var look3 = [ "", "", "", "", "", "", "" ];

const closet = [ headWear, accessoryWear, dressWear, topWear, bagWear, bottomWear, feetWear, backgrounds ];
const collection = [ look1, look2, look3 ];

var closetIndex = 0, itemIndex = 0, collectionIndex = 0, lookIndex = 0, index = 0, count = 0;

function openRoom()
{
   document.getElementById("outside").style.display = "none";
   document.getElementById("inside").style.display = "block";
   document.getElementById("inside").style.display = "flex"; 
   document.getElementById("inside").style.flexDirection = "column"; 
   document.getElementById("inside").style.alignItems = "center";
   document.getElementById("closet").style.display = "block";
   document.getElementById("restartButton").style.display = "block";
   let lookButtons = document.querySelectorAll(".lookButtons"); // display all buttons
   lookButtons.forEach(button => {
      button.style.display = "block";
   } );
   document.getElementById("restartButton").style.display = "block";
}

function restart()
{
   document.getElementById("restartButton").style.display = "none";
   document.getElementById("inside").style.display = "none";
   document.getElementById("outside").style.display = "block";
}

function toggleActions(index)
{
   collectionIndex = index;
   if (document.getElementById("action").style.display === "block")
   {
      document.getElementById("action").style.display = "none";
      document.getElementById("editButton").style.display = "block";
      document.getElementById("clearButton").style.display = "block";
   } 
   else 
   {
      document.getElementById("action").style.display = "block";
      document.getElementById("editButton").style.display = "block";
      document.getElementById("clearButton").style.display = "block";
   }
}

function editLook()
{
   document.getElementById("inside").style.flexDirection = ""; 
   document.getElementById("inside").style.alignItems = "";
   document.getElementById("stage").style.display = "block";
   document.getElementById("stage").style.display = "flex";
   document.getElementById("stage").style.flexDirection = "column";
   document.getElementById("stage").style.alignItems = "center";
   document.getElementById("closet").style.textAlign = "center";
   document.getElementById("clothes").style.display = "block";
   count = 0;
   let lookButtons = document.querySelectorAll(".lookButtons"); // disable and gray out clicked button, undisplay other buttons
   lookButtons.forEach(button => {
      if (count == collectionIndex)
      {
         button.disabled = true;
         button.style.backgroundColor = "lightgray";
      }
      else { button.style.display = "none"; }
   count++;
   } );
   document.getElementById("restartButton").style.display = "none";
   document.getElementById("editButton").disabled = true;
   document.getElementById("editButton").style.backgroundColor = "lightgray";
   document.getElementById("goBackToLooksButton").style.display = "block";
   for (lookIndex = 0; lookIndex < collection[collectionIndex].length; lookIndex++)
   {
      displayLook(lookIndex);
   }
   let categoryButtons = document.querySelectorAll(".categoryButtons"); // display all buttons
   categoryButtons.forEach(button => {
      button.style.display = "block";
   } )
}

function clearLook() // operation - deleting
{
   for (lookIndex = 0; lookIndex < collection[collectionIndex].length; lookIndex++)
   {
      collection[collectionIndex][lookIndex] = "";
      displayLook(lookIndex);
   }
}

function goBackToLooks()
{       
   document.getElementById("scrollButton").style.display = "none";
   document.getElementById("chooseButton").style.display = "none";
   let categoryButtons = document.querySelectorAll(".categoryButtons"); // undisable, ungray, and undisplay all buttons
   categoryButtons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "rgb(226, 206, 251)";
      button.style.display = "none";
   } );   
   document.getElementById("goBackToLooksButton").style.display = "none";
   document.getElementById("clearButton").style.display = "none";
   document.getElementById("editButton").disabled = false;
   document.getElementById("editButton").style.backgroundColor = "rgb(226, 206, 251)";
   document.getElementById("editButton").style.display = "none";  
   let lookButtons = document.querySelectorAll(".lookButtons"); // undisable, ungray, and display selected button, display all buttons
   lookButtons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "rgb(226, 206, 251)";
      button.style.display = "block";
   } );
   document.getElementById("headImage").src = "";
   document.getElementById("accessoryImage").src = "";
   document.getElementById("topImage").src = "";
   document.getElementById("bagImage").src = "";
   document.getElementById("bottomImage").src = "";
   document.getElementById("feetImage").src = "";
   document.querySelector("#stage").style.backgroundImage = "url()";
   document.querySelector("#itemImage").src = "";
}

function categories(index)
{
   closetIndex = index;
   lookIndex = index;
   itemIndex = 0;
   count = 0;
   let categoryButtons = document.querySelectorAll(".categoryButtons"); // disable and gray out selected button, undisplay other buttons
   categoryButtons.forEach(button => {
      if (count == closetIndex)
      {
         button.disabled = true;
         button.style.backgroundColor = "lightgray";
      }
      else { button.style.display = "none"; }
   count++;
   } );
   document.querySelector("#itemImage").src = closet[closetIndex][itemIndex].image; 
   document.getElementById("chooseButton").style.display = "block";
   document.getElementById("scrollButton").style.display = "block";
}

function chooseItem() // operation - adding
{
   collection[collectionIndex][lookIndex] = closet[closetIndex][itemIndex].image;
   displayLook(lookIndex);
   let categoryButtons = document.querySelectorAll(".categoryButtons"); // undisable, ungray, and display all buttons
   categoryButtons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "rgb(226, 206, 251)";
      button.style.display = "block";
   } );
   document.getElementById("chooseButton").style.display = "none";
   document.getElementById("scrollButton").style.display = "none";
   document.getElementById("itemImage").src = "";
}

function scrollThroughItems() // operation - iterating
{
   if (itemIndex == closet[closetIndex].length - 1) { itemIndex = 0; }
   else { itemIndex++; }
   document.querySelector("#itemImage").src = closet[closetIndex][itemIndex].image;
}

function displayLook(lookIndex)
{
   if (lookIndex == 0) { document.querySelector("#headImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 1) { document.querySelector("#accessoryImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 2 || lookIndex == 3) { document.querySelector("#topImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 4) { document.querySelector("#bagImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 5) { document.querySelector("#bottomImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 6) { document.querySelector("#feetImage").src = collection[collectionIndex][lookIndex]; }
   if (lookIndex == 7) 
   { 
      document.querySelector("#stage").style.backgroundImage = "url(" + collection[collectionIndex][lookIndex] + ")";
      document.querySelector("#stage").style.backgroundRepeat = "no-repeat"; 
      document.querySelector("#stage").style.backgroundPosition = "center";
   }
}