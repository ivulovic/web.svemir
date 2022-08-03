import { useContext } from 'react';

import useAuthImplementation from '@implementation/auth';
import { useDispatch } from '@service';

import AuthContext from './context';
import settings from './settings';

const useAuthController = () => {
  const dispatch = useDispatch();
  const auth = useAuthImplementation();
  const getPayload = (params: any = null) => ({
    controller: settings,
    params,
  });
  const onLogin = (params: any) => {
    const payload = getPayload(params);
    dispatch(auth.actions.login(payload));
  };

  const onRegister = (params: any) => {
    const payload = getPayload(params);
    dispatch(auth.actions.register(payload));
  };

  const onUpdate = (params: any) => {
    const payload = getPayload(params);
    dispatch(auth.actions.update(payload));
  };

  const onGetInfo = () => {
    const payload = getPayload();
    dispatch(auth.actions.info(payload));
  };

  return {
    implementation: {
      auth,
    },
    methods: {
      onLogin,
      onRegister,
      onGetInfo,
      onUpdate,
    },
  };
};

export const useAuthControllerScope = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('You are using AuthContext out of AuthContext.Provider');
  }
  return ctx;
};

export default useAuthController;
