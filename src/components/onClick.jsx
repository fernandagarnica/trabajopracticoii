import {useState} from 'react'

function OnClick() {
    const [mostrarLista, setMostrarLista]= useState (true);
    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };
  return (
    <div>
        <h1>Ejemplo con UseState</h1>
        <button onClick={toggleLista}> {mostrarLista ? 'Ocultar lista' : 'Mostrar lista'}</button>
        
        {mostrarLista && (
            <ul>
                <li>Fernanda</li>
                <li>Romina</li>
                <li>Celeste</li>
                <li>Ambar</li>
                <li>Belen</li>
            </ul>
        )}
    </div>
  )
}
export default OnClick;
