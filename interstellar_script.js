window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const contenido = document.getElementById("contenido");
  
    // Fadeout de la pantalla de carga en 2 segundos
    loader.style.opacity = "0";
    
    setTimeout(() => {
      loader.style.display = "none";
      contenido.style.display = "block";
    }, 2000); // El fadeout toma 2 segundos
  });
  