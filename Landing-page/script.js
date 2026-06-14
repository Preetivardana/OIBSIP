document.querySelectorAll(".counter").forEach(counter => {

let target = +counter.dataset.target;
let current = 0;

const timer = setInterval(() => {

current += Math.ceil(target / 50);

if(current >= target){
current = target;
clearInterval(timer);
}

counter.innerText = current + "+";

},30);

});