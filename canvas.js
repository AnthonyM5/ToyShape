window.addEventListener('load', () => {
    //Select canvas element
})


const canvas = document.querySelector("#canvas");
//Set context
const ctx = canvas.getContext('2d');
//Resize
canvas.height = window.innerHeight / 2;
canvas.width = window.innerWidth / 2;

const rectangle = () => {
ctx.beginPath();
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'black'
ctx.fillRect(150, 100, 100, 150)
ctx.stroke();

}

const circle = () => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    

}


document.body.onload = addElement;

onClick = (e) => {
    if (e.target.id === 'rectangle-button') {
        rectangle();
    }

    if (e.target.id === 'circle-button') {
        circle();
    }
  }

function addElement () {
    const circleButton = document.createElement("BUTTON")
    const circle = document.createTextNode("Circle")
    circleButton.setAttribute("id", 'circle-button')
    const rectangleButton = document.createElement("BUTTON")
    const rectangle = document.createTextNode("Rectangle")
    rectangleButton.setAttribute("id", 'rectangle-button')
    circleButton.appendChild(circle)
    rectangleButton.appendChild(rectangle)
    circleButton.addEventListener('click', (e) => onClick(e))
    rectangleButton.addEventListener('click', (e) => onClick(e))

    const currentDiv = document.getElementById("button-container");

    currentDiv.appendChild(circleButton)
    currentDiv.appendChild(rectangleButton)

    


  }

  



