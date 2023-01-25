function titleCase(str) {
    let s = str.split(" ");
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase();
    }
    return s.join(" ");
}

titleCase("I'm a little tea pot");