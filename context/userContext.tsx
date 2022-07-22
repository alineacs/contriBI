import { createContext, ReactNode, useState } from 'react';

type Props = {
  children?: ReactNode;
};

interface DataProps {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  localStorage: Storage | null;
}

export const userContext = createContext({} as DataProps);

export function UserContextProvider({ children }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  const provider = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    localStorage,
  };
  return (
    <userContext.Provider value={provider}>{children}</userContext.Provider>
  );
}
