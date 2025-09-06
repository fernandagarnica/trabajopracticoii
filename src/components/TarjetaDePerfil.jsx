import React from 'react'

export default function TarjetaDePerfil({nombre, apellido, edad, profesion}) {
  return (
    <div>
        <h1>Mi tarjeta de perfil</h1>
        <p> Nombre: {nombre}</p>
        <p> Apellido: {apellido}</p>
        <p> Edad: {edad}</p>
        <p> Profesion: {profesion}</p>
      </div>
  )
}


//componente TarjetaDePerfil.jsx (con props):
//En App.js, define un objeto con datos de un usuario (ej: { nombre: "...", profesion: "...", edad: ... }).
//Crea el componente TarjetaDePerfil.jsx.
//Pasa el objeto usuario como prop desde App.js a TarjetaDePerfil.jsx.
//Dentro de TarjetaDePerfil.jsx, muestra los datos del usuario que recibiste por props.
//Renderiza este componente en App.js.