function crearGaleria(carpeta, cantidad, sufijo) {
  return Array.from({ length: cantidad }, (_, i) => {
    const numero = String(i + 1).padStart(2, "0");
    return `${carpeta}/img${numero}_${sufijo}.jpg`;
  });
}

const galerias = {
  runit: crearGaleria(
    "wallpaper/Giras/RUNIT/Seoul",
    33,
    "rits"
  ),



  mane: crearGaleria(
    "wallpaper/Giras/Maniac/Encore",
    9,
    "mane"
  ),

    manj: crearGaleria(
    "wallpaper/Giras/Maniac/Japan",
    9,
    "manj"
  ),

    mans: crearGaleria(
    "wallpaper/Giras/Maniac/Seoul",
    9,
    "mans"
  ),



    atej: crearGaleria(
    "wallpaper/Giras/dominATE/Japan",
    28,
    "atej"
  ),
    ates: crearGaleria(
    "wallpaper/Giras/dominATE/Seoul",
    17,
    "ates"
  ),  



    "5st1": crearGaleria(
    "wallpaper/Giras/5STAR/t1",
    9,
    "5st1"
  ),
      "5st2": crearGaleria(
    "wallpaper/Giras/5STAR/t2",
    9,
    "5st2"
  ),



    "1sts": crearGaleria(
    "wallpaper/Fanmeeting/1stLoveStay",
    13,
    "1sts"
  ),
    "2sts": crearGaleria(
    "wallpaper/Fanmeeting/2ndLoveStay",
    9,
    "2sts"
  ),
    "3rpf": crearGaleria(
    "wallpaper/Fanmeeting/3rd_PilotFor",
    12,
    "3rpf"
  ),
    "4tms": crearGaleria(
    "wallpaper/Fanmeeting/4th_MagicSchool",
    20,
    "4tms"
  ),
    "5t5c": crearGaleria(
    "wallpaper/Fanmeeting/5th_5Clock",
    10,
    "5t5c"
  ),
    "6toh": crearGaleria(
    "wallpaper/Fanmeeting/6th_STAYinOLH",
    11,
    "6toh"
  ),
    "stig": crearGaleria(
    "wallpaper/Fanmeeting/STAYing",
    8,
    "stig"
  ),
    "tywd": crearGaleria(
    "wallpaper/Fanmeeting/ToyWorld",
    23,
    "tywd"
  ),              
};

// Galería actual
let fondos = galerias.runit;

// 🔥 Aplicar fondo
function setBg(img) {
  document.body.style.backgroundImage = `url(${img})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  localStorage.setItem("bg", img);
}

// 🧠 Dibujar la galería
function renderGaleria(galeria) {

  fondos = galeria;

  const grid = document.getElementById("grid");

  grid.innerHTML = "";

  fondos.forEach(img => {

    const image = document.createElement("img");

    image.src = img;
    image.alt = "Wallpaper";

    image.addEventListener("click", () => {
      setBg(img);
    });

    grid.appendChild(image);

  });

}

// 💾 Cuando cargue la página
window.onload = () => {

  const selector = document.getElementById("galeria");

  // Mostrar la primera galería
  renderGaleria(galerias[selector.value]);

  // Restaurar fondo guardado
  const saved = localStorage.getItem("bg");

  if (saved) {
    setBg(saved);
  } else {
    setBg(fondos[0]);
  }

  // Cambiar de galería
  selector.addEventListener("change", () => {

    renderGaleria(galerias[selector.value]);

  });

};