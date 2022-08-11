import { nanoid } from 'nanoid'
import { SignJWT, jwtVerify } from 'jose'
import { JWT_SECRET_KEY } from '../../libs/constants'
import { Session } from "../../interfaces/Session";
import Cookies from 'js-cookie'

export function emptySession(): Session {
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

export function getSession(): Session {
  return JSON.parse(Cookies.get('cookieERP') ?? '{}')
}

export async function getGrant(): Promise<boolean | Error> {
  const grant = Cookies.get('cookieERPclient')
  if (!grant) throw new Error('Grant Token not found');
  const verified = await jwtVerify(
    grant,
    new TextEncoder().encode(JWT_SECRET_KEY)
  )
  return !!verified
}

export function expireSessionAndGrant(): void {
  Cookies.set('cookieERPclient', '', { expires: -1 })
  Cookies.set('cookieERP', '', { expires: -1 })
}

export async function setSessionAndGrant(session: Session): Promise<void> {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(new TextEncoder().encode(JWT_SECRET_KEY))
  Cookies.set('cookieERPclient', token, { expires: 30 })
  Cookies.set('cookieERP', JSON.stringify(session), { expires: 30 })
}
