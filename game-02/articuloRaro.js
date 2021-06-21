import { calcularQualityGeneral, calcularQualityRaro } from "./calculos.js";

export const articuloRaro = (articulo) => {
  const newQuality = calcularQualityRaro(articulo.sellIn - 1, articulo.quality);
  return {
    ...articulo,
    sellIn: articulo.sellIn - 1,
    quality: calcularQualityGeneral(newQuality),
  };
};
