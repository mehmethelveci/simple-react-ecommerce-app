import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import requestsMiddleware from './middlewares/requests';
import reducer from '../reducers';


const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
			requestsMiddleware,
    );
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(
			requestsMiddleware,
      createLogger(),
    );
  }
};

export const store = createStore(
  reducer,
  getMiddleware()
);
