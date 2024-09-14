import { combineReducers } from "redux";

import defaultReducer from "./default/defaultReducer";
import productReducer from "./products/productReducer";
import formReducer from "./form/formReducer";
import dictionaryReducer from "./dictionary/dictionaryReducer";

const rootReducer = combineReducers({
  default: defaultReducer,
  products: productReducer,
  form: formReducer,
  dictionary: dictionaryReducer,
});

export default rootReducer;
