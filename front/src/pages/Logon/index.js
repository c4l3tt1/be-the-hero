import React, { useState } from 'react';
import herosImg from '../../assets/heros.png';
import herosLogo from '../../assets/logo.png';
import '../../../src/global.css';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id })
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile')
    }
    catch (err) {
        alert('falha no Login')
    }
  }


  return (
    <div className="logon-container">
      <section className="form">
        <img src={herosLogo} alt="Logo" title="Logo" />
        <form onSubmit={handleLogin}>
          <input placeholder="Sua Id"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit">Entrar</button>
          <Link to="/register">Ainda não tenho Cadastro</Link>
        </form>
      </section>
      <img src={herosImg} alt="Heros" title="Heros" />
    </div>

  );
}
