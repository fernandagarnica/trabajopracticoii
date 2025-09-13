import logo from './logo.svg';
import './App.css';
import Publicacion from './components/publicacion';
import Titulo from './components/Titulo';
import TarjetaDePerfil from './components/TarjetaDePerfil';
import OnClick from './components/onClick';
import ListaDeHabilidades from './components/ListaDeHabilidades';
function App() {
  const habilidades = [ "JavaScript", "React", "Node.js", "CSS", "HTML"];
 return (
  <div className="App">
        <h1>Mis habilidades</h1>
        {habilidades.length > 0 && <ListaDeHabilidades items={habilidades}/>}
      </div>
  );
}

export default App;
