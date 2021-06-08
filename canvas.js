window.addEventListener('load', () => {
    //Select canvas element
    const canvas = document.querySelector("#canvas");
    //Set context
    const ctx = canvas.getContext('2d');
    //Resize
    canvas.height = window.innerHeight / 2;
    canvas.width = window.innerWidth / 2;
})