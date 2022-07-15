
var no= document.getElementById("no");
no.addEventListener("mouseover", mouseover);
function mouseover(){
    var no=document.getElementById("no");
    no.style.position='absolute';
    no.style.left= parseInt(Math.random()*1536)+'px';
    no.style.top=parseInt(Math.random()*722) +'px';
} 

function docYes(){
    var txt;
    if(confirm("Do you love me!")){
    txt=" ";
    
    let imgObj = null;
    imgObj=document.getElementById("yes");
    imgObj.style.position='relative';
    imgObj.style.left='100px';
    }else{
    txt="";
  } 
}





// let imgObj = null;
// imgObj = document.getElementById("myImage");
// function init(){
//     imgObj = document.getElementById("myImage");
//     imgObj.style.position = 'relative';
//     imgObj.style.left='0px';
// }
// function moveRight(){
//     imgObj.style.left =parseInt(imgObj.style.left)+10+'px';
// }
// // imgObj.scrollLeft = 0;
// window.onload=init;