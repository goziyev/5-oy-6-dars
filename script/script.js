
import { validate,localStorageSave,localStoragePush,clear,createCard } from "./index.js";
const cards = document.getElementById("cards");
const input = document.getElementById("input_title");
const inputDesc = document.getElementById("input_description");
const inputImg = document.getElementById("input_img");
const btn = document.getElementById("btn");

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
  });


document.addEventListener("DOMContentLoaded",function(){
   let data = [];
  if (localStorage.getItem("cards")) {
    data = localStorageSave()
  }
  if (data.length && cards) {
    data.forEach(element => {
      const tr = createCard(element);
      cards.innerHTML += tr;
 
  })
}})