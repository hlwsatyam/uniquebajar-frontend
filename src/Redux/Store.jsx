import { createStore, combineReducers } from "redux";
import {
  CartAddReducer,
  LoginReducer,
  ProfileNavigationReducer,
  SellerTabAccReducer,
  filterDataReducer,
} from "./Reducer";

const rootReducer = combineReducers({
  profileNavigatoreValue: ProfileNavigationReducer,
  sellerTabValue: SellerTabAccReducer,
  filteredDataValue: filterDataReducer,
  cartValue: CartAddReducer,
  loginStatus: LoginReducer,
  loginStatus: LoginReducer,
});

export const Store = createStore(rootReducer);
