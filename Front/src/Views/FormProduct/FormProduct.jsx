const FormProduct = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" placeholder="ej.: Luces decorativas" name="name" />

        <label htmlFor="image">Ingrese imagen:</label>
        <input
          type="text"
          placeholder="ej.: http://imagenProducto.jpg"
          name="image"
        />

        <label htmlFor="description">Descripcion:</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Ingrese descripcion del producto: "
        ></textarea>

        <label htmlFor="value">Ingrese valor:</label>
        <input type="number" placeholder="ej.: $5.000" name="value" />

        <label htmlFor="stock">Ingrese stock:</label>
        <input type="number" placeholder="ej.: 50" name="stock" />

        <input type="submit" />
      </form>
    </div>
  );
};
