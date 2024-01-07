function validate(input,inputDesc,inputImg) {
  if (!input.value) {
    input.focus();
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "green";
  }

  if (!input.value.trim()) {
    input.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    input.focus();
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "green";
  }
  if (input.value.length <= 4) {
    alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
    input.value = "";
    input.focus();
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "green";
  }

  if (!inputDesc.value) {
    inputDesc.focus();
    inputDesc.style.borderColor = "red";
    return false;
  } else {
    inputDesc.style.borderColor = "Green";
  }
  if (!inputDesc.value.trim()) {
    inputDesc.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    inputDesc.focus();
    inputDesc.style.borderColor = "red";
    return false;
  } else {
    inputDesc.style.borderColor = "green";
  }
  if (inputDesc.value.length <= 4 || inputDesc.value.length >= 50) {
    alert("Ishoralar soni 4 tadan kam bo'lishi  yoki 50 tadan ko'p mumkin emas!!!");
    inputDesc.value = "";
    inputDesc.focus();
    inputDesc.style.borderColor = "red";
    return false;
  } else {
    inputDesc.style.borderColor = "green";
  }

  if (!inputImg.value) {
    inputImg.focus();
    inputImg.style.borderColor = "red";
    return false;
  } else {
    inputImg.style.borderColor = "Green";
  }
  if (!inputImg.value.trim()) {
    inputImg.value = "";
    alert("Probellardan iborat bo'lishi mumkin emas!!");
    inputImg.focus();
    inputImg.style.borderColor = "red";
    return false;
  } else {
    inputImg.style.borderColor = "green";
  }
  if (inputImg.value.length <= 4) {
    alert("Ishoralar soni 4 tadan kam bo'lishi mumkin emas!!!");
    inputImg.value = "";
    inputImg.focus();
    inputImg.style.borderColor = "red";
    return false;
  } else {
    inputImg.style.borderColor = "green";
  }
  
  if (inputImg.value.slice(0,8) !== "https://" && inputImg.value.length <= 15) {
    alert("Siz notog'ri link yubordingiz iltimos qaytadan urinib ko'ring...");
    inputImg.value = "";
    inputImg.focus();    
  return false
  }
  var is_image =  /\.(jpg|jpeg|gif|png)$/.test(inputImg.value);
   inputImg =  is_image ? inputImg.value : 'https://picsum.photos/200/300.jpg' 

  return true;
}

function localStorageSave (){
    let data = JSON.parse(localStorage.getItem("cards"))
    return data
}

function localStoragePush(data){
    return localStorage.setItem("cards",JSON.stringify(data))
}
function clear(input,inputDesc,inputImg){
    input.value = "";
    inputDesc.value = "";
    inputImg.value = ""
}

function createCard(card){
    return `
    <a href="#" class="card" id="card">
    <div class="card-background" style="background-image:url(${card.img})"></div>
    <div class="card-content">
        <h3 class="card-heading">${card.title}</h3>
      <p class="card-category">${card.desc}
      </p>
    </div>
  </a>
    `
}

export{validate,localStorageSave,localStoragePush,clear,createCard}