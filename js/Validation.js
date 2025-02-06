
function validateName(str)
{
    let len = str.length;
    let flag = false;
    for(var i=0;i<len;i++)
    {
        let ascii=str.charCodeAt(i);
        if(!((ascii>=65 && ascii<=90)||(ascii>=97 && ascii<=122)))
        {
            flag=true;
            break;
        }
    }

    if(flag)
    {
        document.getElementById("s").innerHTML="invalid name";
    }
    else
    {
        document.getElementById("s").innerHTML="";
    }
}


function validateNumber(str)
{
    let len = str.length;
    let flag = false;

    for(var i=0;i<len;i++)
    {
        let ascii=str.charCodeAt(i);
        if(!((ascii>=48 && ascii<=57) && str.length==10))
        {
            flag=true;
            break;
        }
    }

    if(flag)
    {
        document.getElementById("s").innerHTML="invalid Number";
        document.getElementById("s").style.color="red";
    }
    else
    {
        document.getElementById("s").innerHTML="";
    }
}

function validateEmail(str)
{
    let index = str.indexOf("@"); // index=0,-1 he give before length
    // console.log(index);
    if(index<=0)
    {
        document.getElementById("s").innerHTML="invalid email address";
    }
    else
    {
        let lastIndex=str.lastIndexOf("@");
        console.log(lastIndex);
        let diff=lastIndex-index;
        if(diff>0)
        {
            document.getElementById("s").innerHTML="@ should not repeat";
        }
        else
        {
            let afterAt=str.slice((index+1));
            let dotIndex=afterAt.lastIndexOf(".");
            if(!(dotIndex==(afterAt.length-4)||dotIndex==(afterAt.length-3)))
            {
                document.getElementById("s").innerHTML="invalid email address";
            }
            else
            {
                document.getElementById("s").innerHTML="";
            }
        }
    }
}


let sccount=0,dcount=0,ucount=0,lcount=0;
function validatePassword(str)
{
   if(str.length<=7)
   {
     document.getElementById("s").innerHTML="Invalid password";
   }
   else
   {
    for(var i=0;i<str.length;i++)
    {
        if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90))
        {
            ++ucount;
        }
        if((str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122))
        {
            ++lcount;
        }
        if((str.charCodeAt(i)>48 && str.charCodeAt(i)<=57))
        {
            ++dcount;
        }
        if(!((str.charCodeAt(i)>65 && str.charCodeAt(i)<=90) || (str.charCodeAt(i)>97 && str.charCodeAt(i)<=122)))
        {
            ++sccount;
        }
    }
    if(sccount>=1 && dcount>=1 && ucount>=1 && lcount>=1)
    {
        document.getElementById("s").innerHTML="";
    }
    else
    {
        document.getElementById("s").innerHTML="invalid password";
    }

   }
}