import { useState } from "react";

function Cards({ productos }) {

  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (producto) => {

    const existe = favoritos.find(
      (fav) => fav.nombre === producto.nombre
    );

    if (!existe) {
      setFavoritos([...favoritos, producto]);
    }
  };

  return (

    <section className="cards-section" id="productos">

      <div className="cards-title">

        <h2>Nuestros Productos</h2>

        <span className="contador">
          Favoritos: {favoritos.length}
        </span>

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
                ❤️ Agregar a favoritos
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

            <div className="favorito-item" key={index}>

              <span>⭐ {fav.nombre}</span>

              <span>{fav.precio}</span>

            </div>

          ))
        )}

      </div>

    </section>
  );
}

export default Cards;