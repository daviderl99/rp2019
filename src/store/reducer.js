import {
  ITEM_ADDED, ITEM_REMOVED, ITEMS_SUCCESS
} from "./actions.js";

const initalState = {
  user: {
    email: null,
    _id: null,
    token: null
  },
  cart: [],
  items: []
};

export const reducer = (state = initalState, action) => {
  switch(action.type){
    case ITEM_ADDED: {
      return {
        ...state,
        cart: state.cart.concat([action.payload])
      };
    }
    case ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.payload
      };
    }
    case ITEM_REMOVED: {
      return {
        ...state,
        cart: removeItemById(state.cart, action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

const removeItemById = (items, _id) => {
  const index = items.findIndex(item => item._id === _id);
  if (index === -1) return items;
  const copy = items.slice();
  copy.splice(index, 1);
  return copy;
};