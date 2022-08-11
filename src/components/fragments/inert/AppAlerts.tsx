import React from 'react';
import { Alert } from '../../../interfaces/AlertContent';

export const AppAlertsSuccess = ({ message }: Alert) => {
  return (
    <div
      className={`my-3 bg-green-100 border-l-4 border-green-500 text-green-700 p-4`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};
export const AppAlertsFail = ({ message }: Alert) => {
  return (
    <div
      className={`my-3 bg-red-100 border-l-4 border-red-500 text-red-700 p-4`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export const AppAlertsOut = ({ message }: Alert) => {
  return (
    <div
      className={`my-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};
