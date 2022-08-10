import { ButtonHTMLAttributes, ReactElement } from 'react';

const AppButton = ({
  onClick,
  disabled,
  title,
}: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {title}
    </button>
  );
};

export default AppButton;
