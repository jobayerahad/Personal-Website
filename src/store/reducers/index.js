import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import blogReducer from "./blogReducer";
import portfolioReducer from "./portfolioReducer";
import serviceReducer from "./serviceReducer";
import aboutReducer from "./aboutReducer";
import profileReducer from "./profileReducer";
import settingsReducer from "./settingsReducer";
import contactReducer from "./contactReducer";

export default combineReducers({
  alert: alertReducer,
  about: aboutReducer,
  profile: profileReducer,
  blog: blogReducer,
  portfolio: portfolioReducer,
  service: serviceReducer,
  settings: settingsReducer,
  contact: contactReducer,
});
