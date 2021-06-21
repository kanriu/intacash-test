import { articuloConjured } from "./articuloConjured.js";
import { articuloLegendario } from "./articuloLegendario.js";
import { articuloNormal } from "./articuloNormal.js";
import { articuloRaro } from "./articuloRaro.js";
import { tipoArticulo } from "./tipoArticulo.js";

const gildedRose = (articulos = []) => {
  let articuloFind = "";

  let articuloFinal = {};
  let articulosFinales = [];

  articulos.forEach((articulo) => {
    articuloFind = tipoArticulo(articulo);
    switch (articuloFind.tipo) {
      case "raro":
        articuloFinal = articuloRaro(articuloFind);
        break;
      case "legendario":
        articuloFinal = articuloLegendario(articuloFind);
        break;
      case "conjured":
        articuloFinal = articuloConjured(articuloFind);
        break;
      default:
        articuloFinal = articuloNormal(articuloFind);
        break;
    }
    articulosFinales = [...articulosFinales, articuloFinal];
  });

  return articulosFinales;
};

console.log(
  gildedRose([
    {
      name: "Aged Brie",
      sellIn: 4,
      quality: 48,
    },
    {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 10,
      quality: 20,
    },
    {
      name: "Lich of king",
      sellIn: 10,
      quality: 2,
    },
    {
      name: "Phoenix",
      sellIn: 15,
      quality: 10,
    },
  ])
);
