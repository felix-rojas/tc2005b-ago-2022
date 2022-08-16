const boton_cambio = document.getElementById("cambio_animo");
const contenedor = document.getElementById("pulpo");
let mood = "Feliz";

const pulpo_happy = "https://img.fruugo.com/product/0/88/175395880_max.jpg"
const pulpo_sad = "https://rukminim1.flixcart.com/image/416/416/kk8mcnk0/stuffed-toy/c/s/q/giftie-reversible-flip-octopus-plush-stuffed-toy-14-cm-14-giftie-original-imafzmszayf2nfh7.jpeg?q=70"


const feliz = () => {
  contenedor.innerHTML = '<img src="'+ pulpo_happy+ '" alt = pulpo feliz';
  boton_cambio.innerText = "Feliz";
  mood = "Feliz";
};

const triste = () => {
  boton_cambio.innerText = "Triste";
  contenedor.innerHTML = '<img src="'+ pulpo_sad+ '" alt = pulpo triste';
  mood = "Triste";
};

// Default state
triste();

boton_cambio.onclick = () => {
  if (mood === "Feliz") {
    triste();
  } else feliz();
};
