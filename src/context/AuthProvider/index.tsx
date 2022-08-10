import { createContext, useEffect, useState } from 'react';
import { AuthCredentials } from '../../interfaces/Credentials';
import { Session } from '../../interfaces/Session';
import { ApiServer } from '../../libs/services';
import { IAuthProvider, IAuthContext } from './types';
import {
  emptySession,
  expireSessionAndGrant,
  getSession,
  setSessionAndGrant,
} from './utils';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [sessionContext, setSessionContext] = useState<Session>(emptySession());
  useEffect(() => {
    const activeSession = getSession();
    if (activeSession) {
      setSessionContext(activeSession);
    }
  }, []);

  async function signIn(credentials: AuthCredentials): Promise<void> {
    try {
      const { data } = await ApiServer.post('/sessions', credentials);
      setSessionAndGrant({ ...data.user, token: data.token });
      setSessionContext({ ...data.user, token: data.token });
    } catch (error: any) {
      throw error;
    }
  }

  async function signOut(): Promise<void> {
    setSessionContext(emptySession());
    expireSessionAndGrant();
  }

  return (
    <AuthContext.Provider
      value={{
        ...sessionContext,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
