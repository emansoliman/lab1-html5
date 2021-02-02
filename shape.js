imge=document.getElementsByTagName("img")[0]
show_img=document.getElementsByTagName("i")[0]
show_img.addEventListener("click",showimge);
var flag=true
function showimge(e){

    if(flag){
    imge.style.display="block"
    flag=false
    }
    else{
    imge.style.display="none"
    flag=true
    }
}
 





