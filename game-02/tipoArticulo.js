import { articulos } from "./articulos.js";

export const tipoArticulo = (articuloInicial) => {
  const articuloFind = articulos.find((articulo) =>
    articuloInicial.name.includes(articulo.name)
  );
  return {
    name: articuloInicial.name,
    sellIn: articuloInicial.sellIn,
    quality: articuloInicial.quality,
    tipo: articuloFind ? articuloFind.tipo : "normal",
  };
};
