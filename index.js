console.log("ready")
// let audioelement= new Audio('2.mp3');
var i=0;
let myprogressbar=document.getElementById("progress")

let songdetails= Array.from(document.getElementsByClassName('songdetails'))
let logo=document.getElementsByClassName("log")
let playpause=document.getElementById("playpause")
// let c=  document.getElementById("songname").childNodes;
let songs= [
    {songname: "song1", filepath:"1.mp3", coverpath:' 1.jpg' },
    {songname: "song2", filepath:"2.mp3", coverpath:' 3.jpg' },
    {songname: "song3", filepath:"3.mp3", coverpath:' 1.jpg' },
    {songname: "song4", filepath:"4.mp3", coverpath:' 3.jpg' },
    {songname: "song5", filepath:"5.mp3", coverpath:' 1.jpg' },
    {songname: "song6", filepath:"6.mp3", coverpath:' 3.jpg' },
    {songname: "song7", filepath:"7.mp3", coverpath:' 1.jpg' },
    {songname: "song8", filepath:"8.mp3", coverpath:' 3.jpg' },
    {songname: "song9", filepath:"9.mp3", coverpath:' 1.jpg' },
    {songname: "song10", filepath:"10.mp3", coverpath:' 1.jpg' }
    
   
]
// c[1].innerHTML="glgl";
// document.getElementById("songname").innerText="fsf";
// document.getElementById('songinfo').innerHTML="fsf";
var audioelement= new Audio(songs[0].filepath);
songdetails.forEach(Element,i=>{
    console.log(Element,i);
Element.getElementsByClassName('songname')[0].innerHTML=songs[i].songname;


})
// document.getElementById("logos").src="Music studio.jpg";
// Array.from(document.getElementsByClassName('songdetails')).forEach((element,i)=>{
//     console.log(i);
//     element.getElementsByTagName('img')[0].source=songs[i].coverpath;
    
    


// })
// for(let k=0;k<10;k++){
//     console.log(k);
//    c[k].innerHTML=songs[i].songname;
// }



// function plays(){
//     document.getElementById("playpause").innerHTML="pause"
// }
function newsong(){
    
  
    if(i==9){
        i=0
        console.log(i);
        audioelement.src=songs[i].filepath;
        audioelement.play()
        document.getElementById("songinfo").innerHTML=songs[i].songname;
        
    }
        else{i++;
            console.log(i);
        audioelement.src=songs[i].filepath;
        audioelement.play()
        document.getElementById("songinfo").innerHTML=songs[i].songname;
        }
  
  
}
function lastsong(){
   
 if(i==0){
     i=9
     console.log(i);
    //  console.log(songs[i].songname);
     audioelement.src=songs[i].filepath;
     audioelement.play()
     document.getElementById("songinfo").innerHTML=songs[i].songname;
 }
   else{
        i--;
        console.log(i);
        audioelement.src=songs[i].filepath;
    
        audioelement.play()
        document.getElementById("songinfo").innerHTML=songs[i].songname;
   }

}
function player(){
    
    if(audioelement.paused||audioelement.currentTime<=0){
         
        audioelement.play();
    

    }
    else{
        audioelement.pause();
    }

}

audioelement.addEventListener('timeupdate', ()=>{ 
    
    // Update Seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)* 100); 
    // console.log(progress);
    // myprogressbar.value = progress;
    document.getElementById('progress').value=progress;
    if(document.getElementById('progress').value==100){i++
        if(i==9){
            i=0
            console.log(i);
           //  console.log(songs[i].songname);
            audioelement.src=songs[i].filepath;
            audioelement.play()
            document.getElementById("songinfo").innerHTML=songs[i].songname;
        }
          else{
               i++;
               console.log(i);
               audioelement.src=songs[i].filepath;
           
               audioelement.play()
               document.getElementById("songinfo").innerHTML=songs[i].songname;
          }
    }

})
document.getElementById('progress').addEventListener(change,()=>{
    console.log("HELLO");
audioelement.currentTime=(document.getElementById('progress').value*audioelement.duration)/100;

})
