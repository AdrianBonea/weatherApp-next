import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter an valid emal')
    .required('Please enter an email'),
});

export interface ILoginForm {
  email: string;
}

const useLogInForm = () => {
  const {
    formState: { errors },
    ...params
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });

  return {
    ...params,
    errors,
  };
};

export default useLogInForm;
