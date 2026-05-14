import { useState } from "react";

function Cards({ productos }) {

  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (producto) => {
    setFavoritos([...favoritos, producto.nombre]);
  };

  return (
    <section className="cards-section" id="productos">

      <div className="cards-title">
        <h2>Nuestros Productos</h2>
      </div>

      <div className="cards-container">

        {productos.map((producto, index) => (

          <div className="card" key={index}>

            <img
              src={producto.imagen}
              alt={producto.nombre}
            />

            <div className="card-content">

              <h3>{producto.nombre}</h3>

              <p>{producto.descripcion}</p>

              <span className="precio">
                {producto.precio}
              </span>

              <button
                onClick={() => agregarFavorito(producto)}
              >
                Agregar a favoritos
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="favoritos">

        <h3>Tus favoritos</h3>

        {favoritos.length === 0 ? (
          <p>No hay favoritos todavía</p>
        ) : (
          favoritos.map((fav, index) => (
            <p key={index}>⭐ {fav}</p>
          ))
        )}

      </div>

    </section>
  );
}

export default Cards;