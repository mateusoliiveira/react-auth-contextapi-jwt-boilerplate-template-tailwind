export interface Alert {
  message: any | unknown;
}

export interface AlertContent extends Alert {
  status: any | unknown;
}
