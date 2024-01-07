
import { validate,localStorageSave,localStoragePush,clear,createCard } from "./index.js";
const cards = document.getElementById("cards");
const input = document.getElementById("input_title");
const inputDesc = document.getElementById("input_description");
const inputImg = document.getElementById("input_img");
const btn = document.getElementById("btn");

let count = 0;
document.addEventListener("DOMContentLoaded",function(){
  let data = [];
 if (localStorage.getItem("cards")) {
   data = localStorageSave()
 }
 if(count == 0){
   let a = {
     title:"Hello world😉",
     desc:"i am a learner",
     img:"https://picsum.photos/200/300"
   }
   data.push(a)
 }
 if (data.length && cards) {
   data.forEach(element => {
     const tr = createCard(element);
     cards.innerHTML += tr;

 })
}})
btn &&
  btn.addEventListener("click", function () {
    if (validate(input,inputDesc,inputImg)) {
      const card = {
          title:input.value,
          desc:inputDesc.value,
          img:inputImg.value
      }
      let data = []
      if (localStorage.getItem("cards")) {
          data = localStorageSave()
      }
      data.push(card)
      localStoragePush(data)
      let create = createCard(card)
      cards.innerHTML += create
      clear(input,inputDesc,inputImg);

    }
    count++
  });

  
