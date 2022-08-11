import { AxiosResponse } from "axios";
import { AuthCredentials, NewAuthCredentials } from "../../interfaces/Credentials";
import { Session } from "../../interfaces/Session";

export interface IAuthContext extends Session {
  signIn: (credentials: AuthCredentials) => Promise<void>
  signUp: (newCredentials: NewAuthCredentials) => Promise<AxiosResponse>
  signOut: () => Promise<void>
}

export interface IAuthProvider {
  children: JSX.Element
}
