let playBackstage = document.querySelector("#play-backstage");
playBackstage.addEventListener("click", (event) => {
    let {target} = event;
    showSecondScreen();
})

function showSecondScreen() {
    let video = document.querySelector("#video-class");
    let videoText1 = document.querySelector("#video-header1");
    let videoText2 = document.querySelector("#video-header2");

    let slider = document.querySelector("#snd-bg--slider");
    let sliderText = document.querySelector("#snd-bg--video-header");

    // secondScreen.style.overflow = "unset";
    video.style.transform = "translateX(-200%)";
    videoText1.style.transform = "translateX(-200%)";
    videoText2.style.transform = "translateX(-200%)";

    slider.style.transform = "translateX(0)";
    sliderText.style.transform = "translateX(0)";
}