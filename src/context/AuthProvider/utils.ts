import Cookies from "js-cookie";
import { Session } from "../../interfaces/Session";

export function emptySession() {
  return {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: null,
    admin: 0,
    created_at: '',
    updated_at: '',
    token: '',
  }
}

export function setSessionCookie(session: Session) {
  Cookies.set('cookieERP', JSON.stringify(session), { expires: 30 })
}

export function removeSessionCookie() {
  Cookies.remove('cookieERP')
}

export function getSessionCookie(): Session | null {
  const jsonSession = Cookies.get('cookieERP')

  if (!jsonSession) {
    return null;
  }
  const session = JSON.parse(jsonSession);
  return session ?? null;
}


