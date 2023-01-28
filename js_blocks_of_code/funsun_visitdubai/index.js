let map = document.querySelector(".map");
let mapPhotos = document.querySelectorAll(".map__photo");
let mapIcons = document.querySelectorAll(".map__icon");

map.addEventListener("mouseover", (event) => {
   let {target} = event;

   if (target.classList.contains("map__photo")) {
       target.classList.opacity = "0.3";
       console.log("3");
   }
});


