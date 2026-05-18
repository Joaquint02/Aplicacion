function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <h2>TecnoStore</h2>

          <p>
            Tu tienda tecnológica online.
          </p>
        </div>

        <div className="footer-links">

          <h3>Enlaces</h3>

          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contacto</h3>

          <p>info@tecnostore.com</p>
          <p>+598 99 999 999</p>
          <p>Montevideo, Uruguay</p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TecnoStore - Todos los derechos reservados
        </p>
      </div>

    </footer>
  );
}

export default Footer;