import { ASYNC_END, ASYNC_ERR, ASYNC_START } from "../../constants";
import { isPromise } from "../../utils/helper";

const requestsMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;

    action.payload.then(
      res => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }

        action.payload = res;

        store.dispatch({ type: ASYNC_END, subtype: action.type, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        store.dispatch({type: ASYNC_ERR, subtype: action.type, error: error });
      }
    );

    return;
  }

  next(action);
};

export default requestsMiddleware;
