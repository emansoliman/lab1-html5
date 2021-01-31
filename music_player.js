buttons=document.getElementsByTagName("button");
mustic_list=document.getElementsByTagName("li")
list=document.getElementsByTagName("ul")[0]
mustic_delete=document.getElementsByTagName("i")
audio=document.querySelector("audio")
var audios=['bensound-creativeminds.mp3','bensound-littleidea.mp3','bensound-anewbeginning.mp3'];
len=audios.length
var i=0;
buttons[2].addEventListener("click",plaay);
audio.src=audios[0]

function plaay(e){

    if (audios[i] !== undefined){
    audio.src=audios[i]
    audio.play()}
    


    

}
audio.addEventListener("ended",end);

function end(e){
    //console.log(len)

 if(i<len-1){
 //console.log(i)
 i++   
 }
 else 
 i=0
 //console.log(i)
 if (audios[i] !== undefined){
    e.target.src=audios[i];
    plaay()
 }
   
     
    
}

buttons[1].addEventListener("click",repet);

function repet(e){
    audio.loop=true

    
}

buttons[0].addEventListener("click",shafel);

function  shafel(e){
    var x=Math.floor(Math.random() * len)
    audio.src=audios[x];
    audio.play()

}
for(var key of  mustic_list )
key.addEventListener("click",start)
function start(e)
{
    if (e.target.textContent!== undefined){
audio.src=e.target.textContent
 
audio.play();
    }
}


 
 