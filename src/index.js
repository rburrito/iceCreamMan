import sum from './sum';
import axios from 'axios';


console.log(sum(1,2));


const main = async () => {
  const res = await axios.get('https://project.wnyc.org/ice-cream/data/places.json', {
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data:{}
  });
  
  console.log(res.data);
}

main();

let button=document.getElementById("chatNow");
let chatBox=document.getElementById("chatbox");
let sendBox=document.getElementById("sendbox");
let chatContainer=document.getElementById("chatContainer");
let chatNow=document.getElementById("chatNow");
let textBox=document.getElementById("textbox");

button.addEventListener("click", function(event){
  chatContainer.style.display="flex";
  chatNow.style.display="none";

});
