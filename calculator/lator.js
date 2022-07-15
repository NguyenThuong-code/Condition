let v = document.getElementById("view");
function getValue(value){  
  v.value+=value;    // v.value += value; 
 
}
function result(){
    let result =  eval(view.value);
    view.value=result;

}
function Delete(){
    view.value="";
}

// function result(){
//     let result = eval(v.value);
//     v.value=result;
// }
// function Delete(){
// v.value=''
// }