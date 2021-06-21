import { calcularQualityGeneral } from "./calculos.js";

export const articuloNormal = (articulo) => {
  return {
    ...articulo,
    sellIn: articulo.sellIn - 1,
    quality: calcularQualityGeneral(articulo.quality - 1),
  };
};
