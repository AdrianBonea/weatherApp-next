/* eslint-disable jsx-a11y/label-has-associated-control */
import { FunctionComponent } from 'react';

// eslint-disable-next-line import/no-unresolved
import { useLogInForm } from '@hooks/useLogInForm';
import {
  StyledLogInForm,
  StyledLabel,
  StyledInput,
  StyledError,
  StyledSubmit,
} from './styled';

const LogInForm: FunctionComponent = () => {
  const { handleSubmit, register, errors } = useLogInForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <StyledLogInForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor="email">Log In with your Email.</StyledLabel>
      <StyledInput
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register('email')}
      />
      <StyledError>{errors.email?.message}</StyledError>
      <StyledSubmit type="submit" />
    </StyledLogInForm>
  );
};

export default LogInForm;
