let left_rail = document.getElementById('lRail');
let railInner = document.getElementById('railInner');
let step_circle = document.querySelector('.step-circle')

const menuBtn = document.querySelector(".threeDots");
const iconsMenu = document.querySelector(".icons");

let open = false;

railInner.onclick = () => {
  open = !open;
  if(open){
    left_rail.style.marginLeft = "0px";
    railInner.style.transform = "rotate(180deg)";
    step_circle.style.background = "#FDFDFD";
        step_circle.style.boxShadow = "2px 2px 10px gray";
    step_circle.style.opacity = 1
  }
  else{
    left_rail.style.marginLeft = "-320px";
    railInner.style.transform = "rotate(0deg)";
    step_circle.style.background = null;
        step_circle.style.boxShadow = null;
        step_circle.style.opacity = 0
  }
};



menuBtn.onclick = () => {
  open = !open;
  iconsMenu.style.maxHeight = open ? "200px" : "0px";
  iconsMenu.style.opacity   = open ? "1" : "0";
};