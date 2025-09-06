import logo from './logo.svg';
import './App.css';
import Publicacion from './components/publicacion';
import Titulo from './components/Titulo';
import TarjetaDePerfil from './components/TarjetaDePerfil';

function App() {
  const Usuario1={ 
    nombre: "Fernanda", 
    apellido: "Garnica", 
    edad: 32, 
    profesion: "Desarrollador" };
    const Usuario2={
      nombre: "Juan",
      apellido: "Perez",
      edad: 28,
      profesion: "Diseñador"
    };
return (

    <div>
      <TarjetaDePerfil
      nombre={Usuario1.nombre}
      apellido={Usuario1.apellido}
      edad={Usuario1.edad}
      profesion={Usuario1.profesion}
      />
      <TarjetaDePerfil
      nombre={Usuario2.nombre}
      apellido={Usuario2.apellido}
      edad={Usuario2.edad}
      profesion={Usuario2.profesion}
      />
 
    </div>
  );
}

export default App;
