import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const validationSchema = yup.object().shape({
  city: yup.string().required('Please enter a city'),
});

export interface ISearchForm {
  city: string;
}

const useSearchForm = () => {
  const {
    formState: { errors },
    ...params
  } = useForm<ISearchForm>({
    resolver: yupResolver(validationSchema),
  });

  return {
    ...params,
    errors,
  };
};

export default useSearchForm;
