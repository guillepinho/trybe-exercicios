import React, { useContext } from 'react';
import MailContext from '../utils/Context';

function ManageAllButtons() {
  const { mail, setMail } = useContext(MailContext);

  const readAll = () => {
    const newList = mail.map((each) => {
      each.status = 1;
      return each;
    });
    setMail(newList);
  }

  const unreadAll = () => {
    const newList = mail.map((each) => {
      each.status = 0;
      return each;
    });
    setMail(newList);
  }

  return (
    <div>
      <button
        type="button"
        onClick={ readAll }
      >
        Marcar todas como lidas
      </button>
      <button
        type="button"
        onClick={ unreadAll }
      >
        Marcar todas como não lidas
      </button>
    </div>
  );
};

export default ManageAllButtons;