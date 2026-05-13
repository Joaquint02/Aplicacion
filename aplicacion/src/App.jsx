import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const productos = [
    {
      nombre: "Notebook Gamer",
      descripcion: "Potencia para juegos y estudio"
    },
    {
      nombre: "Auriculares RGB",
      descripcion: "Sonido profesional"
    },
    {
      nombre: "Monitor Full HD",
      descripcion: "Imagen ultra nítida"
    }
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Cards productos={productos} />
      <Footer />
    </>
  );
}

export default App;