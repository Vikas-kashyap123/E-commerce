import React, { useContext } from "react";
import { loginUserContext } from "./Contexts";

function withUser(IncomingComponent) {
  function OutgoingComponent(props) {
    const contextData = useContext(loginUserContext);
    return <IncomingComponent {...props} {...contextData} />;
  }
  return OutgoingComponent;
}

export default withUser;
