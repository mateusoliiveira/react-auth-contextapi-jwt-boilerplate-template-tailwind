import {
  InputHTMLAttributes,
  ReactElement,
  RefAttributes,
  useRef,
} from 'react';

const AppInput = ({
  placeholder,
  type,
  defaultValue,
  id,
  name,
  title,
  onChange,
}: InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="leading-7 text-sm text-gray-600">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default AppInput;
