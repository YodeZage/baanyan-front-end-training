var container = document.getElementById('container');

container.innerHTML = "<strong>I am strong</strong>";

var temp = document.createElement('span');
temp.innerHTML = "I am new";
container.insertAdjacentElement('beforebegin', temp);

container.style.backgroundColor = "blueviolet";


var containerTwo = document.getElementById('containerTwo');
// console.log(containerTwo.classList);
containerTwo.classList.remove('container-two');
// console.log(containerTwo.classList);
containerTwo.classList.add('container-three');
// console.log(containerTwo.classList);

console.log(containerTwo.getAttribute('customA'));






let inputElement = document.getElementById('dropdown-input');
let dpContainer = document.getElementById('dropdown-container');

inputElement.addEventListener('click', function(event){
    if (dpContainer.style.display === "block") {
        dpContainer.style.display = "none";
    } else {
        dpContainer.style.display = "block";
    }
    event.stopPropagation();
});

let dpContainerWidth = inputElement.offsetWidth;
dpContainer.style.width = dpContainerWidth + "px";

dpContainer.addEventListener('click', function(event){
    inputElement.value = event.target.innerText;
});

document.addEventListener('click', function(){
    dpContainer.style.display = "none";
});