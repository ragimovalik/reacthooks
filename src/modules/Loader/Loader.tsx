import { FunctionComponent, useEffect, useReducer } from 'react';

interface LoadingState {
  loaded: boolean;
  loading: boolean;
  error: Error | null;
}

function reducer(state: LoadingState, newState: Partial<LoadingState>) {
  return { ...state, ...newState };
}

const initialState: LoadingState = {
  loaded: false,
  loading: false,
  error: null,
};

const Loader: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ loading: true });
    dispatch({ loading: false, loaded: true });
    console.log('Loading: false, Loaded: true');
    dispatch({ loading: false, loaded: true, error: new Error() });
  }, []);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  return <p>{JSON.stringify(state, null, 2)}</p>;
};

export default Loader;
