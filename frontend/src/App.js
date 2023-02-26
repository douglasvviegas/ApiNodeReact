import React, { useState, useEffect } from "react";

import api from './services/api'

import './global.css';
import './sidebar.css';
import './app.css';
import './main.css';

import Notes from "./components/notas";
import RadioButton from "./components/RadioButton";


function App() {
  const [title, setTitles] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    async function getAllNotes(){
      const response = await api.get('/annotations',);

      setAllNotes(response.data)
    }
    getAllNotes()
  },[])

  async function handleSubmit(e){
    e.preventDefault();
    
    const response = await api.post('/annotations',{
      title,
      notes,
      priority: false
    })
    
    setTitles('');
    setNotes('');

    setAllNotes([...allNotes, response.data])
  }

  useEffect(() => {
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#ffd3ca'
      if(title && notes){
        btn.style.background = '#e88f7a'
      }
    }
    enableSubmitButton()
  },[title, notes])
  
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input
              maxLength="32"
              required
              value={title}
              onChange={e => setTitles(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              required
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">Salvar</button>
        </form>
        <RadioButton />
      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
             <Notes data={data} /> 
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
