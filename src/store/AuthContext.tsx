import React, { createContext, useState } from "react";

interface LoginParams {
  login: string;
  password: string;
};

export const AuthContext = createContext({
  authorized: false,
  login: (credantials: LoginParams) => Promise.resolve(),
  setAuhtorized: (v: boolean) => {},
});

type Props = {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authorized, setAuhtorized] = useState(false);

  async function login(credantials: LoginParams) {
    debugger
    if (credantials.login === 'vit' && credantials.password === '1234') {
      setAuhtorized(true);
      return;
    }

    throw new Error('USERNAME OR PASSWORD ARE WRONG...')
  }

  return (
    <AuthContext.Provider value={{ authorized, login, setAuhtorized }}>
      {children}
    </AuthContext.Provider>
  )
}