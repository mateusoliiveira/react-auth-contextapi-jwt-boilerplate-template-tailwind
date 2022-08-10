import { AuthCredentials } from "../../interfaces/Credentials";
import { Session } from "../../interfaces/Session";

export interface IAuthContext extends Session {
  signIn: (credentials: AuthCredentials) => Promise<void>
  signOut: () => Promise<void>
}

export interface IAuthProvider {
  children: JSX.Element
}
