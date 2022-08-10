export interface AuthCredentials {
  email: string;
  password: string;
}

export interface NewAuthCredentials extends AuthCredentials {
  name: string;
}
