import React, { ReactElement } from 'react';
import { ChildrenComponent } from '../../../interfaces/Children';
import AppFooter from './AppFooter';
import AppNav from './AppNav';

const AppMain = ({ children }: ChildrenComponent): ReactElement => {
  return (
    <>
      <AppNav />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default AppMain;
