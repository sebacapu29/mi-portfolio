import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./src/assets/sebas-perfil.jpg"
          alt="Foto de perfil"
          className="profile-picture"
        />
        <h1>Mi Portafolio</h1>
        <p>Hola! mi nombre es Sebastian Capurro, soy un programador fullstack especializado en tecnologías modernas.</p>
      </header>

      <section id="about">
        <h2>Sobre mí</h2>
        <p>
          Soy técnico universitario en programación, apasionado por crear aplicaciones eficientes y bien diseñadas. Mi enfoque
          se basa en seguir principios como SOLID, aplicar buenas prácticas y utilizar herramientas y
          tecnologías de vanguardia. A lo largo de mi carrera profesiónal tuve la suerte de participar en grandes proyectos para grandes empresas, como banco Supervielle, Invertir Online y la aerolinea Avianca
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

        {/* <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Sistema de Turnos Médicos" />
          <h3>Angular: Sistema de Turnos Médicos</h3>
          <ul>
            <li>Gestión de turnos con componentes reutilizables.</li>
            <li>Comunicación entre componentes con Inputs y Outputs.</li>
            <li>Manejo de datos con Observables y Subscribe.</li>
          </ul>
          <a href="https://example.com/angular-turnos" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div> */}

        <div className="project-card">
          <img src="./src/assets/sala-de-juegos-portada.png" alt="Sala de juegos" />
          <h3>Angular: Sala de Juegos</h3>
          <ul>
            <li>Manejo de local Storage.</li>
            <li>Interactividad usando Inputs y Outputs.</li>
            <li>Armado de servicios personalizados para mejor abstracción.</li>
            <li>Manejo de archivos json.</li>
            <li>Uso de pipes.</li>
          </ul>
          <a href="https://github.com/sebacapu29/Sala-Juegos-Angular" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>

        <div className="project-card">
          <img src="./src/assets/gif-app-portada.png" alt="Aplicación de Búsqueda de GIFs" />
          <h3>ReactJS: Aplicación de Búsqueda de GIFs</h3>
          <ul>
            <li>Búsqueda dinámica de GIFs utilizando la Fetch API.</li>
            <li>Gestión de estado local con Hooks.</li>
            <li>Diseño responsivo y fácil de usar.</li>
            <li>Creacion de tests con Jest.</li>
          </ul>
          <a href="https://github.com/sebacapu29/GifApp" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
      </section>

      <footer>
        <h2>Contacto</h2>
        <p>Si deseas conocer más sobre mí ¡no dudes en contactarme!</p>
      </footer>
    </div>
  );
};

export default App;