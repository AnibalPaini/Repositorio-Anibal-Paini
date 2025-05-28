import React from 'react'

const Certificado = ({img, title}) => {
  return (
    <div className='certificado'>
        <img src={img} alt={title} />
    </div>
  )
}

export default Certificado