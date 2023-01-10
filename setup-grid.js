const grid = document.getElementById("grid");

for (let i = 0; i < 400; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.style.setProperty("--time", `${3 + Math.random() * 17}s`);
  grid.appendChild(square);
}
