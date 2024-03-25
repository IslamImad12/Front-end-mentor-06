let selectedValue = document.getElementById('selectedValue')
var paragraph = document.querySelector('.paragraph-2');
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var num3 = document.getElementById('num3')
var num4 = document.getElementById('num4')
var num5 = document.getElementById('num5')




// paragraph.innerHTML =  "You selected " + selectedValue + " out of 5";

num1.addEventListener("click", function() {
    selectedValue.innerHTML =  '1'
    console.log(selectedValue);
});
function submitBtn()
{
    window.location = '/thanks.html';
}
