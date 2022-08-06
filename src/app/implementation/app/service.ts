/* eslint-disable @typescript-eslint/no-unused-vars */
import { createService, PayloadAction } from '@service';

import { APP_SCOPE } from './settings';
import { IAppState } from './types';

export const initialState: IAppState = {
  loading: {
    wishlist: false,
  },
  error: {
    wishlist: null,
  },
  data: {
    wishlist: null,
  },
};

const _service = createService({
  name: APP_SCOPE,
  initialState,
  actions: {
    create(state, action: PayloadAction<any>) {
      const { controller } = action.payload;
      state.loading[controller.id] = true;
    },
    loadAll(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.loading[controller.id] = data;
    },
    loadById(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.loading[controller.id] = data;
    },
    remove(state, action: PayloadAction<any>) {
      const { controller } = action.payload;
      state.loading[controller.id] = true;
    },
    setLoading(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.loading[controller.id] = action.payload.data;
    },
    setError(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.error[controller.id] = action.payload.error;
    },
    setData(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.error = null;
      state.loading[controller.id] = false;
      state.data[controller.id] = data;
    },
    addData(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.error = null;
      state.loading[controller.id] = false;
      state.data[controller.id] = [...(state.data[controller.id] || []), data];
    },
    removeData(state, action: PayloadAction<any>) {
      const { controller, data } = action.payload;
      state.error = null;
      state.loading[controller.id] = false;
      state.data[controller.id] = state.data[controller.id].filter((x) => x._id !== data.id);
    },
  },
});

export const { actions, service } = _service;
