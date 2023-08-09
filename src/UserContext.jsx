import * as React from "react";
import PropTypes from "prop-types";

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserContext = React.createContext();

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam", surname: "Doe" });
    }, 1000);
  });
}

export function UserProvider({ children }) {
  const [user, setUser] = React.useState({
    name: "loading...",
  });

  React.useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
