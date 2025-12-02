
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains("open");

    // Cerrar todos
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));

    // Abrir solo si no estaba abierto
    if (!isOpen) item.classList.add("open");
  });
});

let escala = 1;
let grises = false;
let contraste = false;
let fondoClaro = false;

document.getElementById("accesibilidadWidget")
  .onclick = () => {
    const menu = document.getElementById("accesibilidadMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  };

function ajustarTexto(valor) {
  escala += valor * 0.1;
  document.body.style.transform = `scale(${escala})`;
  document.body.style.transformOrigin = "top left";
}

function toggleGrises() {
  grises = !grises;
  document.body.style.filter = grises ? "grayscale(1)" : "none";
}

function toggleContraste() {
  contraste = !contraste;
  document.body.style.filter = contraste ? "contrast(2)" : "none";
}

function toggleFondo() {
  fondoClaro = !fondoClaro;
  document.body.style.background = fondoClaro ? "#fff" : "";
  document.body.style.color = fondoClaro ? "#000" : "";
}

function resetAccesibilidad() {
  escala = 1;
  document.body.style.transform = "scale(1)";
  document.body.style.filter = "none";
  document.body.style.background = "";
  document.body.style.color = "";
}

const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Scroll suave a formulario desde botones "Aplicar"
    document.querySelectorAll(".btn-aplicar").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var puesto = this.getAttribute("data-puesto");
        var selectPuesto = document.getElementById("puesto");
        selectPuesto.value = puesto;

        document.getElementById("formulario").scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Validación básica de formulario + mensaje de éxito (frontend)
    (function () {
      const form = document.getElementById("form-trabaja");
      const mensajeExito = document.getElementById("mensaje-exito");

      form.addEventListener("submit", function (event) {
        // Validación nativa de Bootstrap
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Aquí iría tu lógica real de envío (fetch, AJAX, etc.)
          event.preventDefault(); // evitar envío real en este ejemplo
          mensajeExito.classList.remove("d-none");
          form.reset();
          form.classList.remove("was-validated");
          return;
        }
        form.classList.add("was-validated");
      });
    })();
