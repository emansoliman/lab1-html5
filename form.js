form_input=document.getElementsByTagName("input")
form_p=document.getElementsByTagName("p")
 

form_input[5].addEventListener("click",sub);
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function sub(e){
   
    if(!(form_input[1].value.match(mailformat))){
        
        e.preventDefault();
        form_p[0].style.display="block"
        
    }
    else{
    form_p[0].style.display="none"
    
  
    }
if(form_input[2].value.length<8)
{
    e.preventDefault();
    form_p[1].style.display="block"

}
else{
    form_p[1].style.display="none"
    
  
    }
if(form_input[4].value<21)
{
    e.preventDefault();
    form_p[2].style.display="block"

}
else{
    form_p[2].style.display="none"
    
  
    }
    
    
    }
