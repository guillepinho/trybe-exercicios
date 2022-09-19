import './App.css';
import Mail from './components/Mail';
import ManageAllButtons from './components/ManageAllButtons';
import MailContext from './utils/Context';
import React, { useContext, useEffect } from 'react';

function App() {
  const { mail } = useContext(MailContext);

  useEffect(() => {
    const isRead = mail.every((each) => each.status === 1);
    if (isRead) {
      alert('Parabéns! Você leu todas suas mensagens!')
    }
  }, [mail]);

  return (
    <div className="App">
      <ManageAllButtons />
      <Mail />
    </div>
  );
}

export default App;


