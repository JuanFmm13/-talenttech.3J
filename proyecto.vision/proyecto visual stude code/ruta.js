const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const consumoElectrico = parseFloat(document.getElementById('consumo-electrico').value);
  const capacidadInstaladaEolica = 10000; // kW
  const capacidadInstaladaSolar = 5000; // kW
  const capacidadInstaladaHidroelectrica = 20000; // kW
  const capacidadInstaladaGeotermica = 1000; // kW
  const produccionTotal = 100000; // kWh

  fetch('datos_')
  const capacidadInstaladaRenovable = capacidadInstaladaEolica + capacidadInstaladaSolar + capacidadInstaladaHidroelectrica + capacidadInstaladaGeotermica;
  const proporcionRenovable = capacidadInstaladaRenovable / produccionTotal;
  const porcentajeRenovable = (proporcionRenovable * 100).toFixed(2);

  const energiaRenovableConsumida = consumoElectrico * (porcentajeRenovable / 100);
  const porcentajeEnergiaRenovable = (energiaRenovableConsumida / consumoElectrico * 100).toFixed(2);

  resultado.innerHTML = `
    <p>Capacidad instalada de energía renovable: ${capacidadInstaladaRenovable} kW</p>
    <p>Proporción de energía renovable en la producción total: ${proporcionRenovable.toFixed(2)}</p>
    <p>Porcentaje de energía renovable en el consumo eléctrico total: ${porcentajeEnergiaRenovable}%</p>
  `;
});


