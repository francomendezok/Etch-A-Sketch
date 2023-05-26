const container = document.querySelector(".container");
const alert = document.querySelector(".alert");
const button = document.querySelector("#send");

// SELECT HOVER //

const color = document.querySelector(".color");
const black = document.querySelector(".black");
const greyScale = document.querySelector(".grey-scale");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const hovers = document.querySelectorAll(".select-hover")


function getValue() {
  var value = document.getElementById("submit").value;
   
  if (value > 64) {
    alert.style.display = "inline";
    alert.style.margin = "10px";
    alert.style.padding = "0px"
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
      div.classList.add("box");
      container.appendChild(div);
      
    }
  }
  button.addEventListener("click",getValue);
  
  window.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector("#send").click();
    }
  });

  // Get Class Name //

  
  hovers.forEach(option => option.addEventListener("click", function getClassName () {
    //get class name// 
    const className = option.classList[1];
    console.log(className);
}))

    //with the class name, apply the hover effect//

    const divs = document.querySelectorAll(".box");
    divs.forEach(div => {
      div.addEventListener("click", function () {
        div.style.backgroundColor = "black";
      });
  });
  





  

  // Use a bar to select the size (4x4, 16x16, etc)

