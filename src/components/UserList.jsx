import React, { useState , useEffect } from 'react'
import Loading from '../loadingScreen/Loading';

const UserList = () => {
  const [users ,setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://664e3a10fafad45dfadf71c7.mockapi.io/desafioFinalUsers";
  
  useEffect(() => {
    fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => setUsers(data))
  .catch((error) => console.error("Error al cargar recursos"))
  .finally(() => setLoading(false));
  }, [apiUrl])
  
  return (
    <main className={loading ? "users-container loading" : "users-container"}>
      <h1 className={loading ? "hidden": "tittle-listUsers"}>Lista de usuarios</h1>
      <ul>
    {loading ? 
    <Loading />
    :
    
    users.length === 0 ? 
    <h2>No hay usuarios registrados</h2>
    :
    users.map((user) => (
      <li key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        </li>
    ))  
    }
      </ul>
    </main>
  )
}

export default UserList