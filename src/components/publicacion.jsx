import React from 'react'

function Publicacion({autor, contenido}) {

  return (
       <div style={{
        border: '1px solid black',
        borderRadius: '10px',
        padding: '15 px',
        margin: '10 px auto',
        maxWidth: '500 px',
        backgroundColor: '#f9f9f9'
    }} >
       <><p><strong>{autor}</strong></p>
       <p>{contenido}</p></>
      </div>
  )
}
export default Publicacion;