// Select sidenavbar
var sideNavbar=document.querySelector(".sidenavbar")

function showNavbar()
{
    sideNavbar.style.left="0"
}
function closeNavbar()
{
    sideNavbar.style.left="-60%"
}
// Getting bigimg,smallimg
var bigImg=document.getElementById("bigimg")
var smallImg=document.getElementsByClassName("smallimg")

function change1()
{
    bigImg.src=smallImg[0].src;
}
function change2()
{
    bigImg.src=smallImg[1].src;
}
function change3()
{
    bigImg.src=smallImg[2].src;
}
function change4()
{
    bigImg.src=smallImg[3].src;
}


    

