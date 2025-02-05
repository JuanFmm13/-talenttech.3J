function calcularEnergiaSolar() {
  // Obtener el valor ingresado por el usuario
  const energiaSolarRecibida = parseFloat(document.getElementById("energiaSolar").value);

  // Calcular la energía eléctrica producida
  const energiaProducida =(((energiaSolarRecibida / 1000000 ) * 12) * 32).toFixed(5);
 // const energia = toFixed(energiaProducida, 5)
  // Mostrar los resultados
  document.getElementById("resultado").innerText = `Participación de energia renovable en su consumo: ${energiaProducida}% kWh`;
}