import Navbar from "./componentes/navbar";
import Banner from "./componentes/banner";
import Cards from "./componentes/cards";
import Footer from "./componentes/footer";

function App() {

  const productos = [
    {
      nombre: "Notebook Gamer",
      descripcion: "Potencia para juegos y estudio",
      precio: "$1200",
      imagen:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
      nombre: "Auriculares RGB",
      descripcion: "Sonido profesional envolvente",
      precio: "$250",
      imagen:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      nombre: "Monitor Full HD",
      descripcion: "Imagen ultra nítida",
      precio: "$430",
      imagen:
        "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc"
    }
  ];

  return (
    <div className="app-container">

      <Navbar />

      <main>
        <Banner />
        <Cards productos={productos} />
      </main>

      <Footer />

    </div>
  );
}

export default App;