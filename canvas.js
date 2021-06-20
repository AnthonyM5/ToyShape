window.addEventListener('load', () => {
    //Select canvas element
    const canvas = document.querySelector("#canvas");
    const button = document.createElement("button");
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
    rectangle();
    circle();
})