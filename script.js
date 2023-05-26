const container = document.querySelector(".container");
const sizeSlider = document.getElementById('sizeSlider');
const rangeValue = document.getElementById('rangeValue');



// SELECT HOVER //
const color = document.querySelector(".color");
const black = document.querySelector(".black");
const greyScale = document.querySelector(".grey-scale");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const hovers = document.querySelectorAll(".select-hover")
//________________//

// Input to update divs when range is changed //
sizeSlider.addEventListener('input', function() {
  const value = sizeSlider.value;
  rangeValue.textContent = value + " x " + value;
  printDivs(value);
});

// Print Divs that the user selected //
function printDivs(numDivs) {
  // Clean container
  container.innerHTML = '';

  for (let i = 0; i < numDivs * numDivs; i++) {
    const div = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${numDivs}, 1fr)`; // 5 columns
    container.style.gridTemplateRows = `repeat(${numDivs}, 1fr)`; // 5 rows
    div.classList.add('box');
    container.appendChild(div);
  }
}
  

var className;
//with the class name, apply the hover effect//
document.addEventListener('DOMContentLoaded', function() {
  const divs = document.querySelectorAll('.box');
  divs.forEach(div => {
    div.addEventListener('mouseover', function() {
      switch (className) {
        case "black":
          div.style.backgroundColor = 'black';
          break;
        case "color":
          div.style.backgroundColor = 'red';
          break;
      
        default:
          div.style.backgroundColor = 'black';
          break;
      }
    });
  });
  // Get Class Name //
  hovers.forEach(option => option.addEventListener("click", function getClassName () {
    className = option.classList[1];
    return className;
  }))
});


  
  // Default Size //
  printDivs(32);







  