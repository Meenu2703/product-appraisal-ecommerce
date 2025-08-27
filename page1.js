// var x=document.getElementsByClassName("pic1")[0];
// var y=document.getElementsByClassName("pic2")[0];
// var z=document.getElementsByClassName("pic3")[0];
// function image1(){
//     var a =document.getElementsByClassName("main")[0];
//     a.innerHTML=x.innerHTML;
// }
// function image2(){
//     var b =document.getElementsByClassName("main")[0];
//     b.innerHTML=y.innerHTML;
// }
// function image3(){
//     var c =document.getElementsByClassName("main")[0];
//     c.innerHTML=z.innerHTML;
// }

// function fullImage(ImgLink){
   
//     document.getElementById("Fullview").src=ImgLink;
//     document.getElementById("fullimagevw").style.display="block";
// }
// function Close(){
//     document.getElementById("fullimagevw").style.display="none";
// }
var x = document.getElementsByClassName("pic1")[0];
var y = document.getElementsByClassName("pic2")[0];
var z = document.getElementsByClassName("pic3")[0];

function image1() {
    var a = document.getElementsByClassName("main")[0];
    var imgSrc = x.getElementsByTagName('img')[0].src;
    a.innerHTML = '<img src="' + imgSrc + '" alt="Main image" onclick="fullImage(this.src)">';
}

function image2() {
    var b = document.getElementsByClassName("main")[0];
    var imgSrc = y.getElementsByTagName('img')[0].src;
    b.innerHTML = '<img src="' + imgSrc + '" alt="Main image" onclick="fullImage(this.src)">';
}

function image3() {
    var c = document.getElementsByClassName("main")[0];
    var imgSrc = z.getElementsByTagName('img')[0].src;
    c.innerHTML = '<img src="' + imgSrc + '" alt="Main image" onclick="fullImage(this.src)">';
}

function fullImage(ImgLink) {
    document.getElementById("Fullview").src = ImgLink;
    document.getElementById("fullimagevw").style.display = "block";
}

function Close() {
    document.getElementById("fullimagevw").style.display = "none";
}


