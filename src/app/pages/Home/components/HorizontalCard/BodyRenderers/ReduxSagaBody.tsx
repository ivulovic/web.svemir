import { useContext } from 'react';

import Context from '@pages/Home/context';
import { useDispatch, useSelector } from '@service';

export default function ReduxSagaBody(): JSX.Element {
  const dispatch = useDispatch();
  const {
    implementation: {
      cat: { selectors, actions },
    },
  } = useContext(Context);
  const catImageUrl = useSelector(selectors.selectCatImageUrl);
  const catImageLoading = useSelector(selectors.selectCatImageLoading);

  return (
    <>
      <h2>Redux Saga</h2>
      <p>
        We use Redux Saga to handle asynchronous actions. Most commonly used for data fetching and then storing data in
        the store.
      </p>
      <div>
        {catImageUrl && <img className="cat-image" src={catImageUrl} alt="Cat" />}
        <br />
        <button className="dispatch-button" onClick={() => dispatch(actions.getCatImage())}>
          {catImageLoading ? 'Loading' : 'Get Image'}
        </button>
        {catImageUrl && (
          <button className="dispatch-button delete-button" onClick={() => dispatch(actions.removeCatImageUrl())}>
            Remove
          </button>
        )}
      </div>
      <a href="https://redux-saga.js.org/docs/introduction/GettingStarted" target="_blank">
        View Docs
      </a>
    </>
  );
}
