import React, { useState } from "react";
import { Alertcontext } from "../Contexts";

function AlertProvider({ children }) {
  const [alert, setAlert] = useState();

  const handleAlertRemove = () => {
    setAlert(undefined);
  };

  return (
    <Alertcontext.Provider value={{ alert, setAlert, handleAlertRemove }}>
      {children}
    </Alertcontext.Provider>
  );
}

export default AlertProvider;
