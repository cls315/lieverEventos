import { GET_PRODUCT, GET_BY_NAME, POST_USER, POST_PRODUCT } from "./actions";

const initialState = {
  products: [],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case POST_USER:
      console.log(state.users);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case POST_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
