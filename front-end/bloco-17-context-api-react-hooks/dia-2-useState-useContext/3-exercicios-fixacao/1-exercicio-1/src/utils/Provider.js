import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [studentInfo, setStudentInfo] = useState([]);

  function updateInfo(newInfo) {
    setStudentInfo(studentInfo.concat(newInfo));
  }

  const AppState = {
    studentInfo,
    updateInfo
  };

  return (
    <AppContext.Provider value={AppState}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
