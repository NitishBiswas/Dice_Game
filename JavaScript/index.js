var imageNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + imageNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

var imageNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "images/dice" + imageNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (imageNumber1 > imageNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else if (imageNumber1 < imageNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}