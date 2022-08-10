import { createContext, useEffect, useState } from 'react';
import { AuthCredentials } from '../../interfaces/Credentials';
import { Session } from '../../interfaces/Session';
import { ApiServer } from '../../libs/services';
import { IAuthProvider, IAuthContext } from './types';
import {
  removeSessionCookie,
  getSessionCookie,
  setSessionCookie,
  emptySession,
} from './utils';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [session, setSession] = useState<Session>(emptySession());

  useEffect(() => {
    const session = getSessionCookie();
    if (session) {
      setSession(session);
    }
  }, []);

  async function signIn(credentials: AuthCredentials): Promise<void> {
    try {
      const { data } = await ApiServer.post('/sessions', credentials);
      setSession({ ...data.user, token: data.token });
      setSessionCookie({ ...data.user, token: data.token });
    } catch (error: any) {
      throw error;
    }
  }

  function signOut() {
    removeSessionCookie();
    setSession(emptySession());
  }

  return (
    <AuthContext.Provider
      value={{
        ...session,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
