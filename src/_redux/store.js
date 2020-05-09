import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import course from "../_reducer/courses";

const rootReduces = combineReducers({
  course,
});

const Store = createStore(rootReduces, applyMiddleware(logger, promise));
export default Store;
