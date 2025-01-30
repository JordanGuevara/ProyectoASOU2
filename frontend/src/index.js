const API_URL = "http://backend:5000/api";

async function fetchData(endpoint, tableId, columns) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();

    const tableBody = document.querySelector(`#${tableId} tbody`);
    tableBody.innerHTML = "";

    data.forEach((item) => {
      const row = document.createElement("tr");
      columns.forEach((column) => {
        const cell = document.createElement("td");
        cell.textContent = item[column];
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error(`Error al obtener ${endpoint}:`, error);
  }
}

fetchData("usuarios", "usuarios-table", ["nombre", "email", "fecha_registro"]);
fetchData("pedidos", "pedidos-table", ["id", "usuario_id", "fecha_pedido", "total"]);
fetchData("productos", "productos-table", ["nombre", "precio", "categoria_id"]);
fetchData("categorias", "categorias-table", ["nombre", "descripcion"]);