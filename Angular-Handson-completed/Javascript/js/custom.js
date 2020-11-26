
    
  
    var getBtnGrp=document.getElementsByClassName('btnsGrp');
    for( var i=0;i<getBtnGrp.length;i++)
    {    
       getBtnGrp[i].addEventListener('click',btnClick)
    }
     
    function btnClick(event)
    {         
        var getBtnName= event.target.name;    
        
              
            var matches = getBtnName.match(/(\d+)/); 
              
            if (matches) { 
               
                        console.log(matches[0]); 
            }
        var txtInput=document.createElement("appndTxt");
      
         console.log(getBtnName)
         var appCtr='myContainer'+matches[0];
        var container = document.getElementById(appCtr);
        txtInput.textContent=getBtnName;
        container.appendChild(txtInput);      
        
        
    }

    function getIndiCnterName(getContainerName)
    {
      for(i=0;i<getContainerName.length;i++)
      {
        var indiCtrName= document.getElementsByClassName(getContainerName)[0];
        console.log(indiCtrName);
      }
    
    }
  
    
    


