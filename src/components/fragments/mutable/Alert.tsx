import { ReactElement, useEffect, useState } from 'react';
import { AlertContent } from '../../../interfaces/AlertContent';
import {
  AppAlertsFail,
  AppAlertsOut,
  AppAlertsSuccess,
} from '../inert/AppAlerts';

const Alert = ({ status, message }: AlertContent): ReactElement => {
  const [alertType, setAlertType] = useState<string>('');

  const handleAlerts = (): ReactElement => {
    let buttons: { [x: string]: JSX.Element } = {
      '2': <AppAlertsSuccess message={message} />,
      '4': <AppAlertsFail message={message} />,
    };
    return buttons[alertType] ?? <AppAlertsOut message={message} />;
  };

  useEffect(() => {
    setAlertType(status.toString().charAt(0));
  }, [status, message]);

  return status ? handleAlerts() : <></>;
};

export default Alert;
