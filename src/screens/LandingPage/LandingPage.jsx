import "../../App.css";

const LandingPage = () => {
  return (
    <div className="module-container">
      <header className="module-header">
        Modulo 7: DESARROLLO FRONTEND CON REACTJS
      </header>

      <section className="module-welcome">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo
          la creación de <strong>componentes</strong>, el manejo de{" "}
          <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
      </section>

      <section className="module-content">
        <h2>Temas Cubiertos</h2>
        <div className="temas-cubiertos">
          <p>Componentes funcionales y de clase</p>
          <p>
            Uso de <strong>React hooks</strong> como <strong>useState</strong> y{" "}
            <strong>useEffect</strong>
          </p>
          <p>
            Creación de <strong>custom hooks</strong> como{" "}
            <strong>useForm</strong>
          </p>
          <p>
            Gestión de variables de estado con <strong>useState</strong>
          </p>
          <p>
            Gestión de estado global con <strong>Redux</strong>
          </p>
          <p>
            Integración de <strong>Redux</strong> con <strong>React</strong>
          </p>
          <p>
            Manejo de <strong>Formularios</strong> en <strong>React</strong>
          </p>
          <p>
            Publicando nuestra <strong>Pagina</strong> con{" "}
            <strong>GitHub Pages</strong>
          </p>
        </div>
      </section>

      <section className="module-resources">
        <h2>Recursos Adicionales</h2>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes
          recursos:
        </p>
      </section>

      <footer className="module-footer">© 2024 Modulo 7. USIP.</footer>
    </div>
  );
};

export default LandingPage;
