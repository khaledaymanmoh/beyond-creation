export const CelToF = (temp) => {
  // Converts temprature from Fahrenheit to Celsius
  return Math.round((temp - 32) * (5 / 9));
};
export const KelToC = (temp) => {
  // Converts temprature from Kelvin to Celsius
  return Math.round(temp - 273.15);
};
