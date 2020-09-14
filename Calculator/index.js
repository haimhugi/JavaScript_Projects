function func(num1,num2)
{
 
    alert(num1*num2);
  
}
function chek1(elem)
{
    if(elem.value.length > 3){
        elem.value = elem.value.slice(0,3); }
    if(isNaN(elem.value)){
    alert("Please enter a Number")
    elem.value = "" }
    }

function chek2(elem)
{
    if(elem.value.length > 3){
        elem.value = elem.value.slice(0,3); }
        if(isNaN(elem.value)){
            alert("Please enter a Number")
        elem.value = "" 

        }
}
function myfunc(num1,num2){
    localStorage.clear();
    localStorage.setItem('n1',num1.value);
    localStorage.setItem('n2',num2.value);

      window.location.href="./index2.html";


}
function returnhome()
{
    window.location.href = "./index.html"

}
function myFunction(){
    let n1 = localStorage.getItem('n1');
    let n2 = localStorage.getItem('n2');

document.getElementById("Result").innerHTML = n1*n2;
    
}