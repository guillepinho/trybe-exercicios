import React, { useState } from 'react';
import MailContext from './Context';
import { mailData } from './MailList/mailData';

function Provider({ children }) {
  const [mail, setMail] = useState(mailData);

  const contextValue = {
    mail,
    setMail
  };

  return (
    <MailContext.Provider value={contextValue}>
      {children}
    </MailContext.Provider>
  );
}

export default Provider;