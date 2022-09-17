import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

function Answers() {
  const { studentInfo } = useContext(AppContext);
  return (
    <ul>
      {
        studentInfo.map(({name, age, city, module}, index) => (<li key={ index }>{ `Estudante ${name}, de idade ${age}, residente na cidade de ${city}, atualmente se encontra no módulo de ${module} ` }</li>))
      }
    </ul>
  );
};

export default Answers;