import { PRODUCT_LIST_REQUEST } from "../constants/productConstants";

const productListRedcer = (state, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
       return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    default:
     return state;
  }   
};