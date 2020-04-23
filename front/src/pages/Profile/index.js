import React, { useEffect, useState } from 'react';
import '../../../src/global.css';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')
 const history = useHistory();

  //o primeiro parêmetro do UseEffect é qual a função será executada
  //o segundo parâmetro é QUANDO. Se tivermos uma variável no "quando", toda vez que a variável mudar, a função será executada
  //Se o parêmtro estiver vazio, ele executa apenas uma única vez;
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId])



function handleLogout()
{
   localStorage.clear();
   history.push('/')
}


async function handleDelete(id)
{
  try{
      await api.delete(`incidents/${id}`,{
         headers: {
           Authorization: ongId,
        }
      })

      setIncidents(incidents.filter(item => item.id !== id))
  }catch(err)
  {
    alert('Erro ao deletar o Caso');
  }
}

  return (
    <div className="profile-container">
      <p>Bem-vindo, {ongName}</p>
      <Link to="/incidents/new">Cadastrar no vo Caso</Link>
      <button onClick={handleLogout}>Sair</button>
      <br />
      <br />

      <h1>Casos Cadastrados</h1>
      <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
      {
        incidents && incidents.map(item => (
          <div className="box" key={item.id} style={{flex:'0 0 30%', margin:'30px', maxWidth:'280px', background:'#fff' }}>
            <a onClick={()=> handleDelete(item.id)} style={{marginBottom:30, display:'block'}}>Deletar Caso</a>
            <strong>Caso</strong><br />
            <p style={{marginBottom:15}}>{item.title}</p>
          
            <strong>Descrição</strong><br />
            <p style={{marginBottom:15}}>{item.description}</p>
           
            <strong>Valor</strong><br />
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</p>
          </div>

        ))
      }
    </div>






    </div>

  );
}
