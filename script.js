const container = document.querySelector(".container");
const alert = document.querySelector(".alert");
const button = document.querySelector("#send");

// SELECT HOVER //

const color = document.querySelector(".color");
const black = document.querySelector(".black");
const greyScale = document.querySelector(".grey-scale");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");

  

button.addEventListener("click",getValue);

function getValue() {
  var value = document.getElementById("submit").value;
  
  
  if (value > 64) {
    alert.style.display = "block";
  }
  if (value < 64) {
    alert.style.display = "none";
    printDiv(value);
  }

}



function printDiv (size) {
    container.textContent = ''; // Clear the container, remove the old divs
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // 5 columnas de ancho flexible
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // 5 filas de alto flexible
      container.appendChild(div);

    }
  }

  window.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector("#send").click();
    }
  });

  black.addEventListener("click",blackHover)


  function blackHover () {
    div.addEventListener("mousenter", function (){
      div.style.backgroundColor = "black";
    })
  }
  
  //FIX div is not defined, maybe do it inside a function //
  // Use switch case to read the value of the button and chamge the color//

