let caption = document.querySelector("h1");
let box = document.querySelector("div");
let btn = document.querySelector("button");

let rgbCode = () => {
    let rgb1 = Math.floor(Math.random()*256);
    let rgb2 = Math.floor(Math.random()*256);
    let rgb3 = Math.floor(Math.random()*256);
    let randColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    box.style.backgroundColor = randColor;
    caption.innerText = randColor;
    return randColor;
}

btn.addEventListener("click", rgbCode);

