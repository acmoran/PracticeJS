function changeToGreen()
{
    document.getElementById("task1").className = "green";
}

function checkAge()
{
    var age = document.myForm.age.value;
    alert(age > 65);
}

function multiply()
{
    var num1 = document.calculator.num1.value;
    var num2 = document.calculator.num2.value;
    document.getElementById("output").innerHTML = num1 * num2;
}

function divide()
{
    var num1 = document.calculator.num1.value;
    var num2 = document.calculator.num2.value;
    document.getElementById("output").innerHTML = num1 / num2;
}

function add()
{
    var num1 = document.calculator.num1.value;
    var num2 = document.calculator.num2.value;
    document.getElementById("output").innerHTML = num1 + num2;
}

function subtract()
{
    var num1 = document.calculator.num1.value;
    var num2 = document.calculator.num2.value;
    document.getElementById("output").innerHTML = num1 - num2;
}