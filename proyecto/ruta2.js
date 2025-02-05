document.addEventListener('DOMContentLoaded',async () => {
    const text = await CargarDatos();
    const rows = text.split('\n');
    const tableBody = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
rows.forEach(row => {
        const cols = row.split(',');
        const newRow = tableBody.insertRow();
        cols.forEach(col => {
            const newCell = newRow.insertCell();
            newCell.textContent = col.trim();
        });
    });
        
});

async function CargarDatos(){
    try{
    const archivo = await fetch('datos/12 solar-energy-consumption.csv')
    const respuesta = await archivo.text();
    return respuesta;
    //return archivo;
    }catch(error){
        console.log("El error es: ", error);
    }
}

