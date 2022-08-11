import { ReactElement } from 'react';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AppLink = ({ to, children }: LinkProps): ReactElement => {
  return (
    <Link className="mr-5 hover:text-gray-900" to={to}>
      {children}
    </Link>
  );
};

export default AppLink;
