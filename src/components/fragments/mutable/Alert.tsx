import { ReactElement, useEffect, useReducer } from 'react';
import { AlertContent } from '../../../interfaces/AlertContent';

function reducerColor(state: string, action: any) {
  let availableColors: { [x: string]: string } = {
    '2': 'green',
    '4': 'red',
  };
  return availableColors[action.type] ?? state;
}

const Alert = ({ status, message }: AlertContent): ReactElement => {
  const [state, dispatch] = useReducer(reducerColor, 'red');

  useEffect(() => {
    dispatch({ type: status.toString().charAt(0) });
  }, [status, message]);

  return !!status ? (
    <div
      className={`my-3 bg-${state}-100 border-l-4 border-${state}-500 text-${state}-700 p-4`}
      role="alert"
    >
      <p className="font-bold">Mensagem</p>
      <p>{message}</p>
    </div>
  ) : (
    <></>
  );
};

export default Alert;
