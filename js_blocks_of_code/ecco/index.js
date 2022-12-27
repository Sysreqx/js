let boots = document.querySelectorAll(".boot");

for (let i = 0; i < boots.length; i++) {
    boots[i].addEventListener("click", (event) => {
        let {target} = event;

        let boot1 = document.querySelector(".boot1");
        let boot2 = document.querySelector(".boot2");
        let boot3 = document.querySelector(".boot3");
        let boot4 = document.querySelector(".boot4");

        let boot1Click = document.querySelector(".boot1_click");
        let boot2Click = document.querySelector(".boot2_click");
        let boot3Click = document.querySelector(".boot3_click");
        let boot4Click = document.querySelector(".boot4_click");

        console.log(target);

        if (target.classList.contains("boot1_click")) {
            boot1.style.display = "flex";
            boot1Click.style.display = "none";
        }

        if (target.classList.contains("boot1")) {
            boot1.style.display = "none";
            boot1Click.style.display = "flex";
        }

        if (target.classList.contains("boot2_click")) {
            boot2.style.display = "flex";
            boot2Click.style.display = "none";
        }

        if (target.classList.contains("boot2")) {
            boot2.style.display = "none";
            boot2Click.style.display = "flex";
        }


        if (target.classList.contains("boot3_click")) {
            boot3.style.display = "flex";
            boot3Click.style.display = "none";
        }

        if (target.classList.contains("boot3")) {
            boot3.style.display = "none";
            boot3Click.style.display = "flex";
        }


        if (target.classList.contains("boot4_click")) {
            boot4.style.display = "flex";
            boot4Click.style.display = "none";
        }

        if (target.classList.contains("boot4")) {
            boot4.style.display = "none";
            boot4Click.style.display = "flex";
        }
    });
}



