import React, { useContext } from "react";
import { Alertcontext } from "./Contexts";

function withAlert(IncomingComponent) {
  function OutgoingComponent(props) {
    const contextData = useContext(Alertcontext);
    return <IncomingComponent {...props} {...contextData} />;
  }
  return OutgoingComponent;
}

export default withAlert;
