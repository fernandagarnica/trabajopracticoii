import React from 'react'

function ListaDeHabilidades({items}) {
  return (
    <div>
      {items.length > 0 ? (
    <ul>
        {items.map((habilidades, index) => (
            <li key={index}>{habilidades}</li>
          ))}
        </ul>
      ) : (
        <p>No hay habilidades disponibles.</p>
      )}
    </div>
  );
}
export default ListaDeHabilidades;