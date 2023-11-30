
import './style.css';

(async () => {
  const response = await fetch('http://localhost:3000/api/producto');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Precio</th><th>Proveedor</th><th>Acciones</th></tr>`;
  data.forEach((producto: IProducto) => {
    divTable += `<tr><td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.proveedorId}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
    </div>
    <div class="mb-3">
      <label for="precio" class="form-label">Precio</label>
      <input type="text" class="form-control" id="precio">
    </div>
    <div class="mb-3">
      <label for="proveedorId" class="form-label">ID Proveedor</label>
      <input type="text" class="form-control" id="proveedorId">
    </div>
    <button type='button' class="btn btn-save">Guardars</button>
    <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const nombre = Number(document.querySelector<HTMLInputElement>('#nombre')!.value);
      const precio = Number(document.querySelector<HTMLInputElement>('#precio')!.value);
      const proveedorId = Number(document.querySelector<HTMLInputElement>('#proveedorId')!.value);
      const response = await fetch('http://localhost:3000/api/producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, precio, proveedorId })
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3000/api/producto/${id}`, {
        method: 'DELETE'
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/producto/${id}`);
      const data = await response.json();
      // agregar botón para cancelar
      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
      </div>
      <div class="mb-3">
        <label for="precio" class="form-label">Precio</label>
        <input type="text" class="form-control" id="precio" value="${data.precio}">
      </div>
      <div class="mb-3">
        <label for="proveedorId" class="form-label">ID Proveedor</label>
        <input type="text" class="form-control" id="proveedorId" value="${data.proveedorId}">
      </div>
      <button type='submit' class="btn btn-save">Guardar</button>
      ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        alert("Guard")
        e.preventDefault();
        const nombre = Number(document.querySelector<HTMLInputElement>('#nombre')!.value);
        const precio = Number(document.querySelector<HTMLInputElement>('#precio')!.value);
        const proveedorId = Number(document.querySelector<HTMLInputElement>('#proveedorId')!.value);
        const response = await fetch(`http://localhost:3000/api/producto/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nombre, precio, proveedorId })
        });
        const data = await response.json();
        console.log(data);
        alert(data);
        // reload page
        location.reload();
      });
    });
  });
})();