import React, { ReactElement } from 'react';
import { ChildrenComponent } from '../../../interfaces/Children';
import AppMain from './AppMain';

const AppContainer = ({ children }: ChildrenComponent): ReactElement => {
  return (
    <AppMain>
      <section>{children}</section>
    </AppMain>
  );
};

export default AppContainer;
