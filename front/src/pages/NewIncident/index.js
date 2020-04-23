import React, { useState } from 'react';
import '../../../src/global.css';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function NewIncident() {
 
 const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const idOng =localStorage.getItem('ongId');

const history = useHistory();
  async function handleNewIncident(e) {
    e.preventDefault();
    const data ={
      title,
      description,
      value,
    }

    try{
    await api.post('incidents', data, {
      headers:{
        Authorization : idOng
      }
    });
    alert(`Caso cadastrado com Sucesso`)
    history.push('/profile');
    }
    catch(err)
    {
       alert("Erro ao cadastrar")
    }
   
  }






  return (
   <div className="incident-container">
     <form className="box" onSubmit={handleNewIncident}>
       <label>Título Caso</label><br />
       <input placeholder="Titulo do Caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
       <br /><br />
        <label>Descrição</label><br />
       <textarea placeholder="descrição do Caso"
         value={description}
          onChange={e => setDescription(e.target.value)}
       ></textarea>
       <br /><br />
       <strong>Valor em Reais</strong><br />
        <input placeholder="Valor" 
           value={value}
          onChange={e => setValue(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        <Link to="/profile">Voltar</Link>
     </form>
   </div>

  );
}
