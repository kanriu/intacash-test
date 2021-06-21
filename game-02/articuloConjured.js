import { calcularQualityGeneral } from "./calculos.js";

export const articuloConjured = (articulo) => {
  return {
    ...articulo,
    sellIn: articulo.sellIn - 1,
    quality: calcularQualityGeneral(articulo.quality - 2),
  };
};
