import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { usePersistStorage } from '.';

const AUTH_KEY = 'auth';

const useAuth = () => {
  // @ts-ignore
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [auth, setAuth] = usePersistStorage([], AUTH_KEY);

  useEffect(() => {
    if (isLoggedIn) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [isLoggedIn, setAuth]);

  return auth;
};

export default useAuth;
