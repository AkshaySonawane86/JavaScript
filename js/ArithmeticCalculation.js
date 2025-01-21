var a,b,c;

function calAdd()
{
    a=document.getElementById("f").value;
    b=document.getElementById("s").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("h").innerHTML="Addithion is "+c;
}

function calMul()
{
    a=document.getElementById("f").value;
    b=document.getElementById("s").value;
    c=parseInt(a)*parseInt(b);
    document.getElementById("h").innerHTML="Multiplication is "+c;
}