const container = document.querySelector(".container");
const sizeSlider = document.getElementById('sizeSlider');
const rangeValue = document.getElementById('rangeValue');
const colorPicker = document.getElementById('colorPicker');
var selectedColor;
var className;


// SELECT HOVER //
const color = document.querySelector(".color");
const black = document.querySelector(".black");
const grayScale = document.querySelector(".grey");
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
    div.classList.add("box");

    div.addEventListener('mouseover', function () {
      switch (className) {
        case "black":
          div.style.backgroundColor = 'black';
          break;
        case "color":
          div.style.backgroundColor = selectedColor;
          break; 
        case "grey":
          function changeGreyColor() {
            const greyColor = getRandomGrayScaleColor();
            div.style.backgroundColor = greyColor;
          }
          changeGreyColor();
          break;
        case "rainbow":
          function changeColor() {
            const randomColor = getRandomRGBColor();
            div.style.backgroundColor = randomColor;
          }
          changeColor();
        break;
        default:
          div.style.backgroundColor = 'black';
          break;
      }
    });
    container.appendChild(div);
  }
}
  

//with the class name, apply the hover effect//
document.addEventListener('DOMContentLoaded', function () {
  // Get Class Name //
  hovers.forEach(option => option.addEventListener("click", function getClassName () {
    // Do not get the class of erasem just erase the container //
    if (option.classList[1] === "erase") return;
    if (option.classList[1] === "color") {
      colorPicker.click(); 
      colorPicker.addEventListener('input', function() {
        selectedColor = colorPicker.value;
        return selectedColor;        });
    }
    className = option.classList[1];
    return className;
  }))
});

erase.addEventListener("click", function () {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => box.style.backgroundColor = "white");
})
function getRandomGrayScaleColor() {
  const gray = Math.floor(Math.random() * 256);
  return `rgb(${gray}, ${gray}, ${gray})`;
}

function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}





  // Default Size //
  printDivs(16);








  