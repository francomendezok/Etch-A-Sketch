const container = document.querySelector(".container");
const alert = document.querySelector(".alert");
const button = document.querySelector("button");

  

button.addEventListener("click",getValue);

function getValue() {
  var value = document.getElementById("submit").value;
  
  if (value > 64) {
    alert.style.display = "block";
  }
  if (value < 64) {
    alert.style.display = "none";
    console.log("Value: " + value);
    printDiv(value);
    value = "";
  }
}

  

function printDiv (size) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // 5 columnas de ancho flexible
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // 5 filas de alto flexible
      container.appendChild(div);
    }
  }

  //maybe i can use grid, but there must be another way around that//




// USE
// FLEXBOX
// Create divs related to the user input//