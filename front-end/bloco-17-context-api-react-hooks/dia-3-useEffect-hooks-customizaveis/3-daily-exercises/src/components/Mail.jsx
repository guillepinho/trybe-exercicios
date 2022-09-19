import React, { useContext } from 'react';
import MailContext from '../utils/Context';

function Mail() {
  const { mail, setMail } = useContext(MailContext);

  const readMail = (id) => {
    const indexToEdit = mail.findIndex((each) => each.id === id);
    const editedArray = [...mail];
    editedArray[indexToEdit].status = 1;
    setMail(editedArray);
  };

  const unreadMail = (id) => {
    const indexToEdit = mail.findIndex((each) => each.id === id);
    const editedArray = [...mail];
    editedArray[indexToEdit].status = 0;
    setMail(editedArray);
  };

  const createMailDivs = () => {
    const thisMail = mail.map(({ id, status, title }) => {
      return (
        <div
          key={ id }
          className={ status === 0 ? 'unread' : 'read' }
        >
          <span>
            { title }
          </span>
          <button
            type="button"
            onClick={ () => readMail(id) }
          >
            📖
          </button>
          <button
            type="button"
            onClick={ () => unreadMail(id) }
          >
            📘
          </button>
        </div>
      );
    });
    return thisMail;
  }


  return (
    <div>{ createMailDivs() }</div>
  );
};

export default Mail;