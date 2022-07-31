import { createContext } from 'react';

import { ICatImplementation } from '@implementation/cat/types';

interface IHomeContext {
  implementation: {
    cat: ICatImplementation;
  };
}

const Context = createContext<IHomeContext>(null);

export default Context;
