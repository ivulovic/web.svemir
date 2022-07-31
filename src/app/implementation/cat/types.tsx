
export interface ICatState {
  loading: boolean;
  catImageUrl: string;
}

export interface ICatImplementation {
  actions: typeof import('./service').actions;
  selectors: typeof import('./selectors');
}
