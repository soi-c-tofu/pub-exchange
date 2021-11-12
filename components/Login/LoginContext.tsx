import { createContext, FC, useState } from "react";

export interface LoginContext {
  token: string;
  setToken: (token: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const loginContext = createContext<LoginContext>(undefined);

export const LoginProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string>(undefined);
  const [email, setEmail] = useState<string>(undefined);

  return (
    <loginContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};
