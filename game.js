//Srry for the messy code x(

//Create and add the pieces
for (let index = 0; index < 36; index++) {

  let piece = document.createElement("div");
  piece.classList.add([index], "piece");
  piece.style.backgroundImage = `url(https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/print2/${index}.png)`;

  let top = document.createElement("div");
  top.classList.add("top", "side")
  piece.appendChild(top);

  let right = document.createElement("div");
  right.classList.add("right", "side")
  piece.appendChild(right);

  let botm = document.createElement("div");
  botm.classList.add("botm", "side")
  piece.appendChild(botm);

  let left = document.createElement("div");
  left.classList.add("left", "side")
  piece.appendChild(left);

  let center = document.createElement("div");
  center.classList.add("center")
  piece.appendChild(center);
  document.getElementById("container").appendChild(piece)
}

let arr = [];        

document.querySelectorAll(".side").forEach(side => {

  side.addEventListener("click", (e) => {
    
    let numP = e.target.parentNode.classList[0];

    if (side.classList.contains("left")) {

      if (arr[numP].mode == "vertical") {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x}deg) rotateY(${arr[numP].y + 180}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].y = arr[numP].y + 180;

      } else {
        
        e.target.parentElement.style.transform = `rotateX(${arr[numP].x + 180}deg) rotateY(${arr[numP].y}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].x = arr[numP].x + 180;
      }
    }
    if (side.classList.contains("right")) {

      if (arr[numP].mode == "vertical") {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x}deg) rotateY(${arr[numP].y - 180}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].y = arr[numP].y - 180;

      } else {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x - 180}deg) rotateY(${arr[numP].y}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].x = arr[numP].x - 180;
      }
    }

    if (side.classList.contains("top")) {

      if (arr[numP].mode == "vertical") {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x + 180}deg) rotateY(${arr[numP].y}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].x = arr[numP].x + 180;


      } else {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x}deg) rotateY(${arr[numP].y + 180}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].y = arr[numP].y + 180;

      }

    }

    if (side.classList.contains("botm")) {

      if (arr[numP].mode == "vertical") {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x - 180}deg) rotateY(${arr[numP].y}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].x = arr[numP].x - 180;


      } else {

        e.target.parentElement.style.transform = `rotateX(${arr[numP].x}deg) rotateY(${arr[numP].y - 180}deg) rotateZ(${arr[numP].z}deg)`;
        arr[numP].y = arr[numP].y - 180;

      }
    }

  })

})

document.querySelectorAll(".center").forEach(center => {

  center.addEventListener("click", (e) => {

    let numP = e.target.parentNode.classList[0];

    e.target.parentElement.style.transform = `rotateX(${arr[numP].x}deg) rotateY(${arr[numP].y}deg) rotateZ(${arr[numP].z + 90}deg)`;
    arr[numP].z = arr[numP].z + 90;

    arr[numP].mode == "vertical" ? arr[numP].mode = "horiz" : arr[numP].mode = "vertical";

  })

})

let bodyZ = 0;

document.getElementById("rotateBody").addEventListener("click", (e) => {

  bodyZ = bodyZ + 90;
  document.body.style.transform = `rotateZ(${bodyZ}deg)`;

})


function randomInitPosition() {

  document.querySelectorAll(".piece").forEach( piece =>{

    let randomX = (Math.round(Math.random() * (4 - (-4)) + (-4))) * 180;
    let randomY = (Math.round(Math.random() * (4 - (-4)) + (-4))) * 180;
    let randomZ = (Math.round(Math.random() * (4 - (-4)) + (-4))) * 90

    piece.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;      
    arr.push({ y: randomY, x: randomX, z: randomZ, mode: (randomZ % 180 == 0) ? "vertical" : "horiz"})

  })

}

setTimeout(() => {

  randomInitPosition();

}, 1000);

