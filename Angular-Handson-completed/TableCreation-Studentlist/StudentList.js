//var a=10;
//console.log(a);
var getSname;
var getScourse;
var stuTblArry=[ ];
 

document.getElementById("btnAdd").addEventListener('click',btnAdd);
document.getElementById("btnDisp").addEventListener('click',btnDisp);
function btnAdd(event)
{
    //getting value from user input when hitting add button
      
    getSname=document.getElementById('txtSname').value;
    getScourse=document.getElementById("txtCourse").value;
    
    
    //getScourse+=getScourse+'~';  
    

   stuTblArry.push([getSname,getScourse]);
   document.getElementById("txtCourse").value=" ";
   document.getElementById('txtSname').value=" ";
   
       
}


function btnDisp(event)
{
    console.log(getSname,getScourse);
    console.log(stuTblArry);
    var tblCreation="<table>";
    tblCreation+="<tiltle>";
    tblCreation+="Student Details";
    tblCreation+="</title>";
    tblCreation+="<tr>";
    tblCreation+='<th>'+'Sname'+'</th>'+'<th>'+'SCourse'+'</th>';
    tblCreation+="</tr>"; 
    

    for(var i=0;i<stuTblArry.length;i++)
    {

        tblCreation+="<tr>";
        //var innerArraylength=stuTblrry[i].length; 
          
        for(var j=0;j<stuTblArry[i].length;j++)
        {            
            
            tblCreation+='<td>'+stuTblArry[i][j]+'</td>' ;   
            console.log('[' + i + ',' + j + '] = ' + stuTblArry[i][j]);                 
          
           
        }
        tblCreation+='</tr>'       
        
    }
    tblCreation+='</table>';
    document.getElementById("divDisp").innerHTML=tblCreation;
 
}






