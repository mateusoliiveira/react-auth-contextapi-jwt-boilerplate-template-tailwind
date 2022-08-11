import { FormHTMLAttributes, ReactElement } from 'react';

const AppForm = ({
  children,
}: FormHTMLAttributes<SubmitEvent>): ReactElement => {
  return <form onSubmit={e => e.preventDefault()}>{children}</form>;
};

export default AppForm;
