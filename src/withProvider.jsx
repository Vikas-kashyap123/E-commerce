import React, { useContext } from "react";
import { Alertcontext, loginUserContext } from "./Contexts";

const withProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;

export const withAlert = withProvider(Alertcontext);
export const withUser = withProvider(loginUserContext);
