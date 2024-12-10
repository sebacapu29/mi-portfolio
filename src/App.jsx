import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
          className="profile-picture"
        />
        <h1>Mi Portafolio</h1>
        <p>Hola, soy un programador fullstack especializado en tecnologías modernas.</p>
      </header>

      <section id="about">
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador apasionado por crear aplicaciones eficientes y bien diseñadas. Mi enfoque
          se basa en seguir principios como SOLID, aplicar buenas prácticas y utilizar herramientas y
          tecnologías de vanguardia.
        </p>
      </section>

      <section id="projects">
        <h2>Proyectos</h2>

        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Sistema de Gestión con C# .NET" />
          <h3>Backend: Sistema de Gestión con C# .NET</h3>
          <ul>
            <li>Principios SOLID y Programación Orientada a Objetos (POO).</li>
            <li>Base de datos implementada con Entity Framework.</li>
            <li>Colas de mensajería utilizando RabbitMQ.</li>
          </ul>
          <a href="https://example.com/backend-project" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Sistema de Turnos Médicos" />
          <h3>Angular: Sistema de Turnos Médicos</h3>
          <ul>
            <li>Gestión de turnos con componentes reutilizables.</li>
            <li>Comunicación entre componentes con Inputs y Outputs.</li>
            <li>Manejo de datos con Observables y Subscribe.</li>
          </ul>
          <a href="https://example.com/angular-turnos" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Comanda Digital con Firebase" />
          <h3>Angular: Comanda Digital con Firebase</h3>
          <ul>
            <li>Autenticación y almacenamiento en tiempo real con Firebase.</li>
            <li>Interactividad usando Inputs y Outputs.</li>
            <li>Gestión eficiente del estado con Observables.</li>
          </ul>
          <a href="https://example.com/angular-comanda" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Aplicación de Búsqueda de GIFs" />
          <h3>ReactJS: Aplicación de Búsqueda de GIFs</h3>
          <ul>
            <li>Búsqueda dinámica de GIFs utilizando la Fetch API.</li>
            <li>Gestión de estado local con Hooks.</li>
            <li>Diseño responsivo y fácil de usar.</li>
          </ul>
          <a href="https://example.com/react-gifs" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
      </section>

      <footer>
        <h2>Contacto</h2>
        <p>Si deseas conocer más sobre mí o colaborar en un proyecto, ¡no dudes en contactarme!</p>
      </footer>
    </div>
  );
};

export default App;