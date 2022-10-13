import React, { useState, useEffect } from "react";
import { loginUserContext } from "../Contexts";
import axios from "axios";
import Loading from "../Loading";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <loginUserContext.Provider value={{ user, setUser }}>
      {children}
    </loginUserContext.Provider>
  );
}

export default UserProvider;
