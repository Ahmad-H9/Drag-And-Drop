let btn = document.querySelector("#btn");
let inp = document.querySelector("#inp");
let boxes = document.querySelectorAll(".box");

let drag = null;
let itmsObj = {};
let itmsArr = [];





btn.onclick = function () {
  
  if (inp.value != "" ) {
    itmsObj = {
      content : inp.value
    }
    itmsArr.push(itmsObj);
    showData();
  }
  inp.value = "";
  dragItem();
}  




function dragItem(){
  let itms = document.querySelectorAll(".item");
  itms.forEach(item => {
    item.addEventListener("dragstart", function() {
      drag = item;
      item.style.opacity = "0.2";
    });
    item.addEventListener("dragend", function() {
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach(box => {
      box.addEventListener("dragover", function(e){
        e.preventDefault();
      })
      box.addEventListener("drop", function (){
        this.append(drag);
      })
    })
  });
}


function showData () {
  boxes[0].innerHTML +=`
  <p class = "item" draggable = "true">${inp.value}</p>
  `
}


