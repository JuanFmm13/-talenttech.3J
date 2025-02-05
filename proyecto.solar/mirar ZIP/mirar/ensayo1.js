
document.getElementById('formulario-estimacion').addEventListener('submit', function (event) {
  event.preventDefault();

  const consumoTotal = parseFloat(document.getElementById('consumo-total').value);


  const capacidadSolarInstalada = 0.32;  

  
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


