import { AddToCartNotification } from "../components/SupportiveFunction/AddToCartNotification";
import {
  CartAddAction,
  LoginStatusConstraints,
  SellerTabAccActionConstraints,
  UserProfileNavigationConstraints,
} from "./Constraints";

export const ProfileNavigationReducer = (state = null, action) => {
  if (action.type === UserProfileNavigationConstraints) {
    return action.data;
  } else {
    return state; // Return the current state for actions of different types
  }
};
export const SellerTabAccReducer = (state = "SellerHome", action) => {
  if (action.type === SellerTabAccActionConstraints) {
    return action.data;
  } else {
    return state;
  }
};

export const filterDataReducer = (state = null, action) => {
  if (action.type === UserProfileNavigationConstraints) {
    return action.data;
  } else {
    return state; // Return the current state for actions of different types
  }
};
export const CartAddReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  AddToCartNotification({ text: "Cart Updated!" });
  if (action.type === CartAddAction) {
    const id = action.data;
    if (!id) {
      state = JSON.parse(localStorage.getItem("cart")) || [];
      return state;
    }
    if (state.map((item) => item.id).includes(id)) {
      // Remove the item with the given id from the cart
      const updatedState = state.filter((itemId) => itemId.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    } else {
      // Add the item with the given id to the cart
      const updatedState = [...state, { id, count: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
  } else {
    return state;
  }
};

const initialState = () => {
  return {
    isLogged: localStorage.getItem("customerToken") ? true : false,
  };
};

export const LoginReducer = (state = initialState(), action) => {
  if (action.type === LoginStatusConstraints) {
    return action.data;
  } else {
    return state;
  }
};
