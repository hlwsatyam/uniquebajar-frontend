import {
  CartAddAction,
  LoginStatusConstraints,
  SellerTabAccActionConstraints,
  UserProfileNavigationConstraints,
} from "./Constraints";

export const UserProfileNavigation = (data) => {
  return {
    type: UserProfileNavigationConstraints,
    data: data,
  };
};
export const AddToCart = (id) => {
  return {
    type: CartAddAction,
    data: id,
  };
};
export const loginAction = (status) => {
  return {
    type: LoginStatusConstraints,
    data: status,
  };
};

export const SellerTabAccAction = (status) => {
  return {
    type: SellerTabAccActionConstraints,
    data: status,
  };
};
