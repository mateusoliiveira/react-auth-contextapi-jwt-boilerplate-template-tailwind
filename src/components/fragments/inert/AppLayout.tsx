import { ReactElement } from 'react';
import { LayoutComponent } from '../../../interfaces/Layout';

const AppLayout = ({
  title,
  children,
  description,
}: LayoutComponent): ReactElement => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">{title}</p>
      <p className="text-gray-500 text-lg">{description}</p>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
