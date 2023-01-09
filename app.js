function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rbg(${r}, ${g}, ${b})`
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function (){
    for(let letter of letters){
        letter.getElementsByClassName.color = randomRGB();
    }
}, 2000)