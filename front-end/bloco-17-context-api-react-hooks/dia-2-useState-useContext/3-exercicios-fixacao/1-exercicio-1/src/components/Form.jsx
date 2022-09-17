import React, { useContext, useState } from 'react';
import AppContext from '../utils/AppContext';

function Form() {
  const { updateInfo } = useContext(AppContext);
  const [info, setInfo] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  });
  const [error, setError] = useState('');

  function handleInfo({ target: { name, value } }) {
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  }

  function sendInfo(e) {
    e.preventDefault();
    const values = Object.values(info);
    const check = values.some((each) => (each === '' || each === 0));
    if (check) {
      setError('Favor preencha todos os dados.')
      return;
    }
    updateInfo(info);
    setInfo({
      name: '',
      age: 0,
      city: '',
      module: '',
    });
  }

  return (
    <div>
      <form>
        <span>Nome</span>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleInfo}
        />
        <span>Idade</span>
        <input
          type="number"
          name="age"
          value={info.age}
          onChange={handleInfo}
        />
        <span>Cidade</span>
        <input
          type="text"
          name="city"
          value={info.city}
          onChange={handleInfo}
        />
        <span>Modúlo </span>
        <label htmlFor="fundamentos">
          Fundamentos
          <input
            type="radio"
            name="module"
            value='Fundamentos'
            id="fundamentos"
            onChange={handleInfo}
          />
        </label>

        <label htmlFor="frontend">
          Front-End
          <input
            type="radio"
            name="module"
            value='Front-End'
            id="frontend"
            onChange={handleInfo}
          />
        </label>

        <label htmlFor="backend">
          Back-End
          <input
            type="radio"
            name="module"
            value='Back-End'
            id="backend"
            onChange={handleInfo}
          />
        </label>

        <label htmlFor="ciencia">
          Ciência da Computação
          <input
            type="radio"
            name="module"
            value='Ciência da Computação'
            id="ciencia"
            onChange={handleInfo}
          />
        </label>

        <button
          type="submit"
          onClick={(e) => sendInfo(e)}
        >
          Send
        </button>
      </form>
      {error && <span>{error}</span>}
    </div>
  )
}

export default Form;