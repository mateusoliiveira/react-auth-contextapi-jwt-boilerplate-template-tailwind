import AppLink from './AppLink';
import LogoImage from '../../../assets/logo.png';
import { APP_TITLE } from '../../../libs/constants';
import { ReactElement } from 'react';
import NavButtons from '../mutable/NavButtons';

const AppNav = (): ReactElement => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div>
            <img src={LogoImage} alt="Logo ERP" className="w-10" />
          </div>
          <AppLink to={'/'}>
            <span className="ml-3 text-xl">{APP_TITLE}</span>
          </AppLink>
        </div>
        <nav className="md:ml-auto flex flex-wrap gap-5 items-center text-base justify-center">
          <NavButtons />
        </nav>
      </div>
    </header>
  );
};

export default AppNav;
