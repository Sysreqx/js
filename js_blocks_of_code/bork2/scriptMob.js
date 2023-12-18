

var n2 = 999, //кол-во снежинок
    speed2 = 2, // скорость
    wind2 = 0, // наклон снежинок
    windVariance2 = 1.5, // отклонение снежинок, 1 = без отклонения
    c2 = document.getElementById("bg-img2"),
    p2 = document.getElementById("secondSnowfall"),
    ctx2 = c2.getContext("2d"),
    cw2 = (c2.width = p2.offsetWidth);
    ch2 = (c2.height = p2.offsetHeight);

    particles2 = [];
    particleNumber2 = 0;
function setParticle2(p) {
    particleNumber2++;
    var _tl = new TimelineMax()
        .fromTo(p, p.dur, {
            x:rand(-Math.abs(wind2), (cw2 + Math.abs(wind2))),
            y:-p.size,
            progress:0
        },{
            x:'+='+String( rand(wind2/windVariance2, wind2*windVariance2)),
            y:ch2+p.size,
            progress:1,
            ease:Power0.easeNone,
            onComplete:function(){ setParticle2(p); }
        });
    if (particleNumber2<n2) _tl.seek(p.dur*rand());
}

for (var i=0; i<n2; i++) {
    particles2.push(new Particle(i));
    setParticle2(particles2[i]);
}

TweenMax.ticker.addEventListener("tick", function(){
    ctx2.clearRect(0, 0, cw2, ch2);
    for (var i=0; i<n2; i++) {
        particles2[i].draw();
    }
});

window.addEventListener('resize', function() {
    particleNumber2 = 0;
    cw2 = (c2.width = c2.offsetWidth);
    ch2 = (c2.height = p2.offsetHeight);
    for (var i=0; i<n2; i++) {
        TweenMax.killTweensOf(particles2[i]);
        setParticle2(particles2[i]);
    }
});