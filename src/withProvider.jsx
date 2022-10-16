import React, { useContext } from "react";
import { Alertcontext, CartContext, loginUserContext } from "./Contexts";

function withProvider(provider) {
  function MyHOC(IncomingComponent) {
    function OutgoingComponent(props) {
      const contextData = useContext(provider);
      return <IncomingComponent {...props} {...contextData} />;
    }
    return OutgoingComponent;
  }
  return MyHOC;
}

export default withProvider;
export const withAlert = withProvider(Alertcontext);
export const withUser = withProvider(loginUserContext);
export const withCart = withProvider(CartContext);

// import React, { useContext } from "react";
// import { Alertcontext, loginUserContext } from "./Contexts";

// const withProvider = (provider) => (IncomingComponent) => (props) => {
//   const contextData = useContext(provider);
//   return <IncomingComponent {...props} {...contextData} />;
// };

// export default withProvider;

// export const withAlert = withProvider(Alertcontext);
// export const withUser = withProvider(loginUserContext);
