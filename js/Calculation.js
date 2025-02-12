var firstValue, SecoundValue, result;

let count=0;

function createCalUI()
{
    let div=document.createElement("div");
    div.style.width="600px";
    div.style.height="400px";
    div.style.background="red";
    div.style.padding="40px";
    // div.style.marginLeft="300px";
    
    div.style.margin="auto";
    div.style.marginTop="130px";

    let txtField=document.createElement("input");
    txtField.setAttribute("type","text");
    txtField.setAttribute("name","name");
    txtField.setAttribute("value","");
    txtField.setAttribute("id","txtId");
    txtField.setAttribute("placeHolder","values");
    txtField.style.width="560px";
    txtField.style.height="40px";
    txtField.style.padding="20px";


    let matrix=[
        ['1','2','3','+'],
        ['4','5','6','-'],
        ['7','8','9','*'],
        ['0','.','=','/']
    ];

    let table=document.createElement("table");
    table.style.width="600px";
    table.style.height="300px";
    table.style.backgroundColor="white";
    table.style.padding="20px";
    table.style.marginTop="10px";

    for(var i=0;i<matrix.length;i++)
    {
        let row=document.createElement("tr");
        for(var j=0;j<matrix[i].length;j++)
        {

            let column=document.createElement("td");
            let btn=document.createElement("input");
            btn.setAttribute("type","buttton");
            btn.setAttribute("name","btn");
            btn.setAttribute("id",matrix[i][j]);
            btn.setAttribute("value",matrix[i][j]);
            btn.style.width="60px";
            btn.style.height="60px";
            btn.style.borderRadius="50%";
            btn.style.fontSize="32px";
            // btn.style.margin="Auto";
            btn.style.textAlign="center";
            btn.addEventListener("mouseover",function(){
               btn.style.backgroundColor="orange";
               btn.style.color="white";
            });

            btn.addEventListener("mouseleave",function(){
                btn.style.backgroundColor="white";
                btn.style.color="black";
            });

            btn.addEventListener("click",function(){
                let textFieldCalc=document.getElementById("txtId");
                let txtPrevVal=textFieldCalc.value;
                let val=btn.value;
                if(!((val==="+")||(val==="*")||(val==="-")||(val==="/")||(val==="=")))
                {
                   textFieldCalc.value=txtPrevVal+val;
                }
                else
                {
                    switch(btn.value)
                    {
                        case "+":
                                  firstValue=parseInt(txtPrevVal);
                                  document.getElementById("txtId").value="";
                                  count=1;
                                  break;
                        case "*":
                                  firstValue=parseInt(txtPrevVal);
                                  document.getElementById("txtId").value="";
                                  count=2;
                                  break;
                        case "-":
                                  firstValue=parseInt(txtPrevVal);
                                  document.getElementById("txtId").value="";
                                  count=3;
                                  break;
                        case "/":
                                  firstValue=parseInt(txtPrevVal);
                                  document.getElementById("txtId").value="";
                                  count=4;
                                  break;
                        case "=":
                                  SecoundValue=parseInt(txtPrevVal);
                                  
                                  if(count==1)
                                  {
                                    result=firstValue+SecoundValue;
                                  }
                                  if(count==2)
                                  {
                                    result=firstValue*SecoundValue;
                                  }
                                  if(count==3)
                                  {
                                    result=firstValue-SecoundValue;
                                  }
                                  if(count==4)
                                  {
                                      result=firstValue/SecoundValue;
                                  }
                                  document.getElementById("txtId").value=""+result;
                                  break;
                        default:
                    }
                }
            });
            column.appendChild(btn);
            row.appendChild(column);
        }
        table.appendChild(row);
        
    }
    div.appendChild(txtField);
    div.appendChild(table);
    document.getElementById("bdy").appendChild(div);
}