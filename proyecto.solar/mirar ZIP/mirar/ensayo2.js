
document.getElementById('formulario-estimacion').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const consumoTotal = parseFloat(document.getElementById('consumo-total').value);
  
    
    const capacidadSolarInstalada = 1700;  
  
 
    const porcentajeSolar = (capacidadSolarInstalada / consumoTotal) * 100;
  
    document.getElementById('porcentaje').innerText = porcentajeSolar.toFixed(2) + '%';
  });
  
  document.getElementById('archivo-datos').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
      const data = e.target.result.split('\n').map(line => line.split(','));
      const tableBody = document.getElementById('tabla-datos').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = ''; 
  
      data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
    };
    
    reader.readAsText(file);
  });
 
  const datosHistoricos = [
    { año: 1965, energiaSolar: 0, capacidadInstalada: 0, proporcion: 0 },
    { año: 1970, energiaSolar: 10, capacidadInstalada: 0, proporcion: 0 },
    { año: 1980, energiaSolar: 50, capacidadInstalada: 1, proporcion: 0.5 },
    { año: 1990, energiaSolar: 150, capacidadInstalada: 10, proporcion: 2 },
    { año: 2000, energiaSolar: 300, capacidadInstalada: 20, proporcion: 5 },
    { año: 2010, energiaSolar: 500, capacidadInstalada: 50, proporcion: 10 },
    { año: 2015, energiaSolar: 1000, capacidadInstalada: 200, proporcion: 20 },
    { año: 2020, energiaSolar: 1500, capacidadInstalada: 1000, proporcion: 25 },
    { año: 2022, energiaSolar: 1700, capacidadInstalada: 1700, proporcion: 30 },
  ];
  

  const tableBody = document.getElementById('tabla-datos').getElementsByTagName('tbody')[0];
  datosHistoricos.forEach((data) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${data.año}</td>
      <td>${data.energiaSolar}</td>
      <td>${data.capacidadInstalada}</td>
      <td>${data.proporcion}%</td>
    `;
    tableBody.appendChild(tr);
  });
  

  const ctxBarras = document.getElementById('grafico-barras').getContext('2d');
  new Chart(ctxBarras, {
    type: 'bar',
    data: {
      labels: ['Energía Solar', 'Energía Eólica', 'Hidroeléctrica', 'Geotérmica'],
      datasets: [{
        label: 'Producción de Energía Renovable en Colombia (GWh)',
        data: [1700, 2500, 5000, 1000], 
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }]
    }
  });
  
  const ctxTorta = document.getElementById('grafico-torta').getContext('2d');
  new Chart(ctxTorta, {
    type: 'pie',
    data: {
      labels: ['Solar', 'Eólica', 'Hidroeléctrica', 'Geotérmica'],
      datasets: [{
        label: 'Participación de Energías Renovables en Colombia',
        data: [25, 20, 45, 10], 
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
      }]
    }
  });
  
  const ctxLineas = document.getElementById('grafico-lineas').getContext('2d');
  new Chart(ctxLineas, {
    type: 'line',
    data: {
      labels: datosHistoricos.map(d => d.año),
      datasets: [{
        label: 'Capacidad Instalada de Energía Solar en Colombia (MW)',
        data: datosHistoricos.map(d => d.capacidadInstalada),
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false
      }]
    }
  });
  
  const ctxArea = document.getElementById('grafico-area').getContext('2d');
  new Chart(ctxArea, {
    type: 'line',
    data: {
      labels: datosHistoricos.map(d => d.año),
      datasets: [{
        label: 'Consumo de Energía Solar',
        data: datosHistoricos.map(d => d.energiaSolar),
        fill: true,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
      }, {
        label: 'Consumo de Energía Convencional',
        data: [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000], 
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }]
    }
  });
  



  const datosHistoricos = [
    { año: 1965, energiaSolar: 0, capacidadInstalada: 0, proporcion: 0 },
    { año: 1970, energiaSolar: 5, capacidadInstalada: 0, proporcion: 0 },
    { año: 1980, energiaSolar: 10, capacidadInstalada: 1, proporcion: 0.1 },
    { año: 1990, energiaSolar: 50, capacidadInstalada: 5, proporcion: 0.5 },
    { año: 2000, energiaSolar: 100, capacidadInstalada: 20, proporcion: 2 },
    { año: 2010, energiaSolar: 300, capacidadInstalada: 100, proporcion: 10 },
    { año: 2015, energiaSolar: 1000, capacidadInstalada: 500, proporcion: 15 },
    { año: 2020, energiaSolar: 1500, capacidadInstalada: 1700, proporcion: 25 },
    { año: 2022, energiaSolar: 1700, capacidadInstalada: 2000, proporcion: 30 },
  ];

  <tr>
  <th>Año</th>
  <th>Energía Solar (MWh)</th>
  <th>Capacidad Instalada (MW)</th>
  <th>Proporción en el Total (%)</th>
</tr>
