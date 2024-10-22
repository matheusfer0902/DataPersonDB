import './style.css';
import api from '../../services/api'
import { useEffect } from 'react';

function Home() {

  let users = []

  async function getUsers(){
    users = await api.get('/users')
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="main-container">
      <div className="navbar">
        <div className="navbar-left">
          <a href="#" className="nav-link">Home</a>
        </div>
        <div className="navbar-right">
          <button className="sign-in-btn">Sign in</button>
          <button className="register-btn">Register</button>
        </div>
      </div>

      {users.map( user => (
        <div key={user.id} className="user-info">
          <p className="user-name">Nome: {user.name}</p>
          <p className="user-details">Email: {user.email}</p>
          <p className="user-details">Idade: {user.age}</p>
          <hr className="divider" />
        </div>
      ))}

    </div>
  );
}

export default Home;
