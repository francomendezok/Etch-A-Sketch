const container = document.querySelector(".container");
const submit = document.getElementById("submit").value
console.log(submit);

function getValue () {

}

submit.addEventListener("click", getValue);


for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
  }




// USE
// FLEXBOX
// Create divs related to the user input//