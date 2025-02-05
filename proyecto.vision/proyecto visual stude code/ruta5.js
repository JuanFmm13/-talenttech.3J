const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: ['Energía Solar', 'Energía Eólica', 'Hidroeléctrica', 'Geotérmica'],
    datasets: [{
      label: 'Producción de Energía Renovable en Colombia (GWh)',
      data: [1700, 2500, 5000, 1000], 
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  }
});

const ctxTorta = document.getElementById('graficoTorta').getContext('2d');
new Chart(ctxTorta, {
  type: 'pie',
  data: {
    labels: ['Solar', 'Eólica', 'Hidroeléctrica', 'Geotérmica'],
    datasets: [{
      label: 'Participación de Energías Renovables en Colombia',
      data: [30, 25, 35, 10], 
      backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
    }]
  }
});

const ctxLineas = document.getElementById('graficoLineas').getContext('2d');
new Chart(ctxLineas, {
  type: 'line',
  data: {
    labels: ['2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Capacidad Instalada de Energía Solar en Colombia (MW)',
      data: [0.191236, 0.442111, 0.764135, 1.071366], 
      borderColor: 'rgba(255, 159, 64, 1)',
      fill: false
    }]
  }
});

const ctxArea = document.getElementById('graficoArea').getContext('2d');
new Chart(ctxArea, {
  type: 'line',
  data: {
    labels:['2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Consumo de Energía Solar',
      data: [0.3, 0.5, 0.4, 0.2], 
      backgroundColor: 'rgba(253, 157, 253, 0.93)',
      borderColor: 'rgba(247, 0, 247, 0.93)',
    }, {
      label: 'Consumo de Energía Convencional',
      data: [56.65124, 54.437, 49.83735, 59.858196], 
      fill: true,
      backgroundColor: 'rgba(180, 72, 72, 0.59)',
      borderColor: 'rgb(250, 204, 0)',
    }]
  }
});
