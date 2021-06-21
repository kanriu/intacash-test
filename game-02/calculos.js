export const calcularQualityRaro = (sellIn, calidad) => {
  if (sellIn <= 5) {
    calidad = calidad + 3;
  } else if (sellIn <= 10) {
    calidad = calidad + 2;
  } else if (sellIn === 0) {
    calidad = 0;
  } else {
    calidad = calidad + 1;
  }
  return calidad;
};

export const calcularQualityGeneral = (calidad) => {
  if (calidad < 0) {
    return 0;
  } else if (calidad > 50) {
    return 50;
  } else {
    return calidad;
  }
};
