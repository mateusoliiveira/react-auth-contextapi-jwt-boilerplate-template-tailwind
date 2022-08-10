import { AxiosResponse } from "axios";
import { AuthCredentials } from "../../interfaces/Credentials";
import { Session } from "../../interfaces/Session";

export interface IAuthContext extends Session {
  signIn: (credentials: AuthCredentials) => Promise<void>
  signOut: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}
