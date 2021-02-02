buttons=document.getElementsByTagName("button");
mustic_name=document.getElementsByTagName("p")
mustic_list=document.getElementsByTagName("li")
list=document.getElementsByTagName("ul")[0]
mustic_delete=document.getElementsByTagName("i")
audio=document.querySelector("audio")
select_file=document.getElementsByTagName("input")[0]
 
 
var audios=['bensound-creativeminds.mp3','bensound-littleidea.mp3','bensound-anewbeginning.mp3'];

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

 if(i<(audios.length)-1){
 //console.log(i)
 i++   
 }
 else 
 i=0
 console.log(audios.length)
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

    var x=Math.floor(Math.random() *audios.length)
    audio.src=audios[x];
    audio.play()

}
for(key of mustic_delete)
 key.addEventListener("click",deletee)

function deletee(e)
{
    
     
    

     for(var i=0 ;i<=audios.length;i++){
   
    if(audios[i]==e.target.parentNode.children[0].textContent){
   audios.splice(i,1)
    //delete audios[i];
    }

     }
   
     e.target.parentNode.remove();
 
     
    
}

for(var key of  mustic_name)
key.addEventListener("click",start)

function start(e)
{
    if (e.target.textContent!== undefined){
    audio.src=e.target.textContent
    audio.play();
    }
    
}


 
select_file.addEventListener('change',add)
function add(e)
{
    var para = document.createElement("li");
    var song = document.createElement("p");
    del= document.createElement("i");
    del.className="fa fa-close"
    for(var key of e.target.files)
        console.log(key.name);
        audio.src=key.name
        audio.play()
        audios.push(key.name)
        var node = document.createTextNode(key.name);
        song.appendChild(node);
        para.appendChild(song)
        para.appendChild(del)
        list.appendChild(para);
       
for(key of mustic_delete)
 key.addEventListener("click",deletee)


for(var key of  mustic_name)
key.addEventListener("click",start)
console.log(audios.length);

 
}



        



 