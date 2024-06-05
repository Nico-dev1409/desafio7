import React, { useState } from 'react'
import "./styles.css"

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const apiUrl = "https://664e3a10fafad45dfadf71c7.mockapi.io/desafioFinalUsers";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiUrl, {
      method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: name , email: email}),
     })
     .then(() => {
      setName("");
      setEmail("");//no se limpia
     })
    
    // Aquí puedes añadir la lógica que desees ejecutar al enviar el formulario
   // console.log('Formulario enviado');
  };

  return (
    <>
    <section className='container-form'>
      <h1>Crear usuario</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nameInput" className="form-label mt-4">Nombre:</label>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} className="form-control inputUser" id="nameInput" placeholder="Ingrese nombre"/>
      </div>
    <div>
      <label htmlFor="emailInput" className="form-label mt-4">Email:</label>
      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="form-control inputUser" id="emailInput" placeholder="Ingrese email"/>
    </div>
    <button type="submit" className="btn btn-primary button-form" >Submit</button>
    </form>
   </section>
   
  </>
  )
}

export default Home;