document.addEventListener("DOMContentLoaded", function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: false,
        autoplay: {
            delay: 5000,
        },
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });


    const swiper1 = new Swiper('.swiper-1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10000,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        allowTouchMove: false,
        // allowSlidePrev: false,
        // allowSlideNext: false,
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });


    const swiper2 = new Swiper('.swiper-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 1000,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: false,
        autoplay: {
            delay: 5000,
        },
        updateOnWindowResize: true,
        touchEventsTarget: 'container'
    });


    //
    //
    // AudioPlayer
    // let audio = document.getElementById("audio");
    // let playPauseButton = document.getElementById("play-pause-button");
    // let nextButton = document.getElementById("next-btn");
    // let isPlaying = true;
    // let currentTrack = 1;
    // let totalTracks = 3; // Update this with the total number of tracks
    // let currentTrackIndex = 0;
    // let tracks = ["https://esquire.kz/wp-content/uploads/weekend24/music/track1.mp3", "https://esquire.kz/wp-content/uploads/weekend24/music/track2.mp3", "https://esquire.kz/wp-content/uploads/weekend24/music/track3.mp3", "https://esquire.kz/wp-content/uploads/weekend24/music/track4.mp3"];

    // audio.muted = true;

    // document.querySelector(".wrapper").addEventListener('click', (event) => {
    //     // console.log(event);
    //     if (isPlaying) {
    //         // audio.muted = false;
    //         // audio.play();
    //     }
    // });

    // playPauseButton.addEventListener("click", function() {
    //     if (isPlaying) {
    //         audio.pause();
    //         playPauseButton.src = "play_button.png";
    //         isPlaying = false;
    //     } else {
    //         audio.play();
    //         playPauseButton.src = "pause_button.png";
    //         isPlaying = true;
    //     }
    // });


    // function nextTrack() {
    //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    //     audio.src = tracks[currentTrackIndex];
    //     audio.play();
    //     // playPauseButton.src = "pause_button.png";
    //     isPlaying = true;
    //     audio.muted = false;
    // }
    //
    // function prevTrack() {
    //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    //     audio.src = tracks[currentTrackIndex];
    //     audio.play();
    //     // playPauseButton.src = "pause_button.png";
    //     isPlaying = true;
    //     audio.muted = false;
    // }


    //
    //
    // Disk change method
    // let disks = document.querySelectorAll(".disk");
    // let pauseBtns = document.querySelectorAll(".controller-button-2");
    // let currentIndex = 0;
    //
    // // Function to change to previous image
    // function previousImage() {
    //     currentIndex = (currentIndex - 1 + disks.length) % disks.length; // Calculate previous index
    //     // document.getElementById('slider-image').src = disks[currentIndex]; // Change image source
    //     disks.forEach(d => {
    //         d.classList.add("opacity-zero");
    //     });
    //     disks[currentIndex].classList.remove("opacity-zero");
    // }
    //
    // // Function to change to next image
    // function nextImage() {
    //     currentIndex = (currentIndex + 1) % disks.length; // Calculate next index
    //     // document.getElementById('slider-image').src = disks[currentIndex]; // Change image source
    //     disks.forEach(d => {
    //         d.classList.add("opacity-zero");
    //     });
    //     disks[currentIndex].classList.remove("opacity-zero");
    // }
    //
    // function pausePlayer() {
    //     // disks[currentIndex].classList.toggle("disk-rotate");
    //     disks.forEach(d => {
    //         d.classList.toggle("disk-rotate");
    //     });
    //
    //     pauseBtns.forEach(b => {
    //         b.classList.toggle("dn");
    //     });
    //
    //
    //     if (isPlaying) {
    //         // audio.pause();
    //         audio.muted = true;
    //         // playPauseButton.src = "play_button.png";
    //         isPlaying = false;
    //     } else {
    //         audio.play();
    //         audio.muted = false;
    //         // playPauseButton.src = "pause_button.png";
    //         isPlaying = true;
    //     }
    //
    //     // audio.muted = true;
    // }
    //
    // // Event listeners for previous and next buttons
    // document.getElementById('previous-btn').addEventListener('click',() => {
    //     previousImage();
    //     prevTrack();
    // });
    //
    // document.getElementById('pause-btn').addEventListener('click', pausePlayer);
    //
    // document.getElementById('pause-btn1').addEventListener('click', pausePlayer);
    //
    // nextButton.addEventListener('click',() => {
    //     nextImage();
    //     nextTrack();
    // });

    // nextButton.addEventListener('click', nextImage);


    // // Show player controller when scrolls to second section
    // let section2 = document.querySelector(".section-2");
    // let section2Height = section2.offsetHeight;
    // let playerController = document.querySelector(".player-controller");
    //
    // // Show LOCK when scrolls
    // let section1 = document.querySelector(".section-1");
    // let section1Height = section1.offsetHeight;
    // let lockClosed = document.querySelector(".lock-closed");
    // let lockOpened = document.querySelector(".lock-opened");
    //
    // window.onscroll=function(){
    //     // Show player controller when scrolls to second section
    //     if (document.documentElement.scrollTop >= section2Height) {
    //         playerController.style.opacity = 1;
    //     }
    //     else {
    //         playerController.style.opacity = 0;
    //     }
    //
    //     // Show LOCK when scrolls
    //     if (document.documentElement.scrollTop >= section2Height + section1Height) {
    //         // playerController.classList.remove("opacity-zero");
    //         lockClosed.style.opacity = 0;
    //         lockOpened.style.opacity = 1;
    //     }
    // }

    // let swiper1Elem = document.querySelector(".swiper-1");
    // console.log(swiper1Elem);
    let swiperBtns = document.querySelector(".swiper-1").querySelectorAll(".swiper-pagination-bullet");
    // console.log(swiperBtns);

    let pavilion1 = document.querySelector(".pavilion-1");
    let pavilion2 = document.querySelector(".pavilion-2");
    let pavilion3 = document.querySelector(".pavilion-3");

    let pavilionLineLeft = document.querySelector(".pavilion_line_left");
    let pavilionLineCenter = document.querySelector(".pavilion_line_center");
    let pavilionLineRight = document.querySelector(".pavilion_line_right");

    // mob
    let pavilionMob1 = document.querySelector(".pavilion-mob-1");
    let pavilionMob2 = document.querySelector(".pavilion-mob-2");
    let pavilionMob3 = document.querySelector(".pavilion-mob-3");

    pavilion1.addEventListener('click',() => {
        swiperBtns[0].click();
        pavilion2.style.color = "#000000";
        pavilion3.style.color = "#000000";
        pavilion1.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "initial";
        pavilionLineCenter.style.display = "none";
        pavilionLineRight.style.display = "none";
    });

    pavilion2.addEventListener('click',() => {
        swiperBtns[1].click();
        pavilion1.style.color = "#000000";
        pavilion3.style.color = "#000000";
        pavilion2.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "none";
        pavilionLineCenter.style.display = "initial";
        pavilionLineRight.style.display = "none";
    });

    pavilion3.addEventListener('click',() => {
        swiperBtns[2].click();
        pavilion1.style.color = "#000000";
        pavilion2.style.color = "#000000";
        pavilion3.style.color = "#FFFFFF";

        pavilionLineLeft.style.display = "none";
        pavilionLineCenter.style.display = "none";
        pavilionLineRight.style.display = "initial";
    });


    pavilionMob1.addEventListener('click',() => {
        swiperBtns[0].click();

        pavilionMob2.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#FFFFFF";
        pavilionMob1.style.color = "#000000";

        pavilionMob2.style.background = "#000000";
        pavilionMob3.style.background = "#000000";
        pavilionMob1.style.background = "#FFFFFF";
    });
    pavilionMob2.addEventListener('click',() => {
        swiperBtns[1].click();

        pavilionMob1.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#FFFFFF";
        pavilionMob2.style.color = "#000000";

        pavilionMob1.style.background = "#000000";
        pavilionMob3.style.background = "#000000";
        pavilionMob2.style.background = "#FFFFFF";
    });
    pavilionMob3.addEventListener('click',() => {
        swiperBtns[2].click();

        pavilionMob1.style.color = "#FFFFFF";
        pavilionMob2.style.color = "#FFFFFF";
        pavilionMob3.style.color = "#000000";

        pavilionMob1.style.background = "#000000";
        pavilionMob2.style.background = "#000000";
        pavilionMob3.style.background = "#FFFFFF";
    });


    // zapihai menya na harpers esli ne naidesh kak udalitt casino
    // let hTags = document.getElementsByTagName("h2");
    //
    // for (let i = 0; i < hTags.length; i++) {
    //     if (hTags[i].innerHTML.includes("Casino")) {
    //         hTags[i].parentElement.style.display = "none";
    //     }
    // }

    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(DrawSVGPlugin);

    let li1 = gsap.from(".list-item-1", { x: "-100vw", duration: 1 });
    let li2 = gsap.from(".list-item-2", { x: "+100vw", duration: 2 });
    let li3 = gsap.from(".list-item-3", { x: "-100vw", duration: 1 });
    let li4 = gsap.from(".list-item-4", { x: "+100vw", duration: 2 });

    ScrollTrigger.create({
        trigger: ".list-item-1",
        start: "top center",
        animation: li1,
    });
    ScrollTrigger.create({
        trigger: ".list-item-2",
        start: "top center",
        animation: li2,
    });
    ScrollTrigger.create({
        trigger: ".list-item-3",
        start: "top center",
        animation: li3,
    });
    ScrollTrigger.create({
        trigger: ".list-item-3",
        start: "top center",
        animation: li4,
    });


    //draws all elements with the "draw-me" class applied
    // gsap.from(".map-svg-1", {duration:2,drawSVG: "0%"});
});

