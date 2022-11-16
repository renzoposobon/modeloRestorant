let centralVinos = document.getElementById("central-vinos")

let arrVinos = [
    {nombre: "Cabernet Sauvignoc Azul", precio: 1350, src: "cabernet-sauvignoc-azul.jpg"},
    {nombre: "Chardonnay Dulce Natural Patridge", precio: 1100, src: "chardonnay-dulce-natural-patridge.jpg"},
    {nombre: "Torrontes San Pedro de Yacochuya", precio: 2150, src: "torrontes-san-pedro-de-yacochuya.jpg"},
    {nombre: "Chardonnay Tomero", precio: 2100, src: "chardonnay-tomero.jpg"},
    {nombre: "Malbec 375 Las Perdices", precio: 1175, src: "malbec-375-las-perdices.jpg"},
    {nombre: "Malbec Alma Mora Reserve", precio: 1300, src: "malbec-alma-mora-reserve.jpg"},
    {nombre: "malbec angelica zapata", precio: 12000, src: "malbec-angelica-zapata.jpg"},
    {nombre: "malbec azul", precio: 1350, src: "malbec-azul.jpg"},
    {nombre: "malbec-azul-reserva", precio: 3450, src: "malbec-azul-reserva.jpg"},
    {nombre: "malbec-cadus-tupungato", precio: 4960, src: "malbec-cadus-tupungato.jpg"},
    {nombre: "malbec-chakana-nuna", precio: 2000, src: "malbec-chakana-nuna.jpg"},
    {nombre: "malbec-doña-paula-state", precio: 1650, src: "malbec-doña-paula-state.jpg"},
    {nombre: "malbec-el-enemigo", precio: 8000, src: "malbec-el-enemigo.jpg"},
    {nombre: "malbec-finca-la-linda", precio: 2600, src: "malbec-finca-la-linda.jpg"},
    {nombre: "malbec-fond-de-cave", precio: 1440, src: "malbec-fond-de-cave.jpg"},
    {nombre: "malbec-gran-reserva-piattelli-cafayate", precio: 4530, src: "malbec-gran-reserva-piattelli-cafayate.jpg"},
    {nombre: "malbec-reserva-piatelli-cafayate", precio: 2330, src: "malbec-reserva-piatelli-cafayate.jpg"},
    {nombre: "malbec-las-perdices", precio: 1670, src: "malbec-las-perdices.jpg"},
    {nombre: "malbec-saint-felicien", precio: 3800, src: "malbec-saint-felicien.jpg"},
    {nombre: "malbec-septima-emblema", precio: 1690, src: "malbec-septima-emblema.jpg"},
    {nombre: "malbec-tomero", precio: 2050, src: "malbec-tomero.jpg"},
    {nombre: "malbec-trapiche-reserva", precio: 1930, src: "malbec-trapiche-reserva.jpg"},
    {nombre: "sauvignoc-blanc-375-las-perdices", precio: 1090, src: "sauvignoc-blanc-375-las-perdices.jpg"},
    {nombre: "sauvignoc-blanc-las-perdices", precio: 1440, src: "sauvignoc-blanc-las-perdices.jpg"},
    {nombre: "sauvignoc-blanc-tomero", precio: 2050, src: "sauvignoc-blanc-tomero.jpg"},
    {nombre: "syrah-luna", precio: 1300, src: "syrah-luna.jpg"},
    {nombre: "tomero-rose", precio: 1800, src: "tomero-rose.jpg"},
    {nombre: "torrontes-festivo", precio: 2600, src: "torrontes-festivo.jpg"}
]

for (const i of arrVinos) {
    let divVino = document.createElement("div");
    divVino.classList = ("vinos")
    divVino.innerHTML = `
    <img src="../src/vinos/${i.src}"></img>
    <h3 class="titulo-vinos">${i.nombre.toUpperCase().split("-").join(" ")}</h3>
    <p class="precio-vinos">$${i.precio}</p>
    `;
    centralVinos.append(divVino);
}

let botonVolver = document.getElementById("volver");

botonVolver.addEventListener("click", () => {
    window.open("../index.html")
});