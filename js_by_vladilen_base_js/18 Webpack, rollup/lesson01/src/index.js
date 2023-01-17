import '../index.css'
import img from '../assets/js.png';

console.log("Hello world");

const jsImageHtml = document.createElement("img");
jsImageHtml.className = "js-image";
jsImageHtml.src = img;

document.body.appendChild(jsImageHtml);