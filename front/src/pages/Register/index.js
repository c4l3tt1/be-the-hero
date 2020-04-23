import React, { useState } from 'react';
import '../../../src/global.css';
import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');


const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();
    const data ={
      name,
      email,
      whatsapp,
      city,
      uf,
    }

    try{
         const response = await api.post('ongs', data);
    alert(`Seu ID de acesso é: ${response.data.id}`)
    history.push('/');
    }
    catch(err)
    {
  
       alert("Erro ao cadastrar")
    }
   
  }

  return (
    <div className="register-container">
      <div className="content">
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input placeholder="E-mail" type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <input placeholder="cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <input placeholder="UF"
            value={uf}
            onChange={e => setUf(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>

  );
}
