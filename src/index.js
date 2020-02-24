import sum from './sum';
import axios from 'axios';


console.log(sum(1,2));

/*
const main = async () => {
  const res = await axios.get('https://project.wnyc.org/ice-cream/data/places.json​');
  console.log(res.data);
}

main();
*/
let button=document.getElementById("chatNow");
let chatBox=document.getElementById("chatbox");
let sendBox=document.getElementById("sendbox");

button.addEventListener("click", function(event){
  console.log("chatting now");
  chatBox.style.backgroundColor="lightGray";
  chatBox.style.height="25vw";
  chatBox.style.width="32vw";
  chatBox.style.borderRadius="20%";
  sendBox.style.backgroundColor="lightGray";
  sendBox.style.borderStyle="solid";
  sendbox.style.height="8vw";
  sendBox.style.width="30vw";
  sendBox.style.borderRadius="20%";
});
