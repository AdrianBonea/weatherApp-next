/* eslint-disable jsx-a11y/label-has-associated-control */
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { useLogInForm } from '@hooks';
import { authActions } from 'store/authSlice';

import {
  StyledLogInForm,
  StyledLabel,
  StyledInput,
  StyledError,
  StyledSubmit,
} from './styled';

const LogInForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useLogInForm();
  const onSubmit = () => {
    dispatch(authActions.login());
  };

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
