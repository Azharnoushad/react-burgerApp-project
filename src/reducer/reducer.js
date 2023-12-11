export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    // Add To Cart function----------------------------------------------------

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payLoad] };
    // Increase Each Product Quantity function----------------------------------------------------

    case "INCREASE_QUANTITY": {
      let modifiedCart = state.cart.map((item) => {
        if (item.id === action.payLoad) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
      return { ...state, cart: modifiedCart };
    }
    // Increase Each Product Quantity function----------------------------------------------------

    case "DECREASE_QUANTITY": {
      let modifiedCart = state.cart.map((item) => {
        if (item.id === action.payLoad) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });

      return { ...state, cart: modifiedCart };
    }
    // Remove product from cart function----------------------------------------------------

    case "REMOVE_ITEM": {
      let filteredCart = state.cart.filter(
        (item) => item.id !== action.payLoad
      );
      return { ...state, cart: filteredCart };
    }

    default:
      return { ...state };
  }
};
