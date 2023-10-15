import React from 'react'
import imgPicachu from "../assets/Pikachu.svg"

const Home = () => {
  return (
      <>
      <main className='d-flex flex-column ' >
      <div className='d-flex  justify-content-center p-3'><h1 className='font-weight-bold'>Bienvenido maestro Pokémon</h1></div>
      <div className='d-flex  justify-content-center p-3'>
      <img src={imgPicachu}className='img-main' alt=""  />
      </div>
      </main>
      </>
      )
}

export default Home