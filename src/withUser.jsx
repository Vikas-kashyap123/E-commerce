import React, { useContext } from "react";
import { loginUserContext } from "./App";

function withUser(IncomingComponent) {
  function OutgoingComponent(props) {
    const { user, setUser } = useContext(loginUserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
  }
  return OutgoingComponent;
}

export default withUser;
