//fddasf
document.addEventListener("DOMContentLoaded", async ()=> {
  setTimeout(() => {
    toggleLoading();
  }, 2000);
  
  let trendingContainer = document.querySelector("#strendingMovies");
  trendingContainer.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                <img spc="img/posters/${i}.jpg" alt="${i}">
            </a>`;
  } 
});


// Trending Movies Scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies; //Controlador para  intervalo de scroll
let scrollDirectionTrendingMovies = 0; //Direção de scroll (0 = parado, 1 = direita, -1 = esquerda)

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; //distancia das bordas ara ativar o scroll

    if (mouseX < boundingRect.left + threshold) {
      scrollDirectionTrendingMovies = -1; //Scroll para esquerda
      containerTrendingMovies.style.cursor = "url('img/arow-right.png'), auto"; // Cursos para esquerda   
    } // Pág 46
});