let productImg = document.getElementById("productImg");
let img = document.querySelectorAll("img");
let choose = document.getElementById("choose")
img[1].onclick = function () {
    productImg.src = "./css/daniel-korpai-6HkXWrSBl_8-unsplash.jpg" ;
}
img[2].onclick = function () {
    productImg.src = "./css/david-svihovec-HM-Y497t5CU-unsplash.jpg" ;
}
img[3].onclick = function () {
    productImg.src = "./css/daniel-korpai-L8y01mTuDZg-unsplash.jpg" ;
}
img[4].onclick = function () {
    productImg.src = "./css/daniel-korpai-QhF3YGsDrYk-unsplash.jpg" ;
}
img[5].onclick = function () {
    productImg.src = "./css/auguras-pipiras-O43D6CYzxqM-unsplash.jpg" ;
}
img[6].onclick = function () {
    productImg.src = "./css/jozsef-hocza-h1MnFsRI-_I-unsplash.jpg" ;
    choose.textContent = "White"
}
img[7].onclick = function () {
    productImg.src = "./css/auguras-pipiras-O43D6CYzxqM-unsplash.jpg" ;
    choose.textContent = "Black"
}

