const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");
// console.log(window.getComputedStyle(red).backgroundColor);
const getBGcolor = (selected) =>{
   return window.getComputedStyle(selected).backgroundColor;
}
// let color = getBGcolor(red);

const magicColorChanger = (element, color) =>{
    return element.addEventListener("click", () =>{
        center.style.background = color;
    });
}
magicColorChanger(red, getBGcolor(red))
magicColorChanger(cyan, getBGcolor(cyan))
magicColorChanger(violet, getBGcolor(violet))
magicColorChanger(pink, getBGcolor(pink))
magicColorChanger(orange, getBGcolor(orange))
