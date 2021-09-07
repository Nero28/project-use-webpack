import "./index.css";
import JS_IMAGE from "./assets/js.jpg";

console.log(`Hello World!`);

const jsText = document.createElement("h1");
jsText.className = "js-title";
jsText.textContent= "I love JavaScript";
document.body.append(jsText);

const jsImageHTML = document.createElement("img");
jsImageHTML.className = "js-image";
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);