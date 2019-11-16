import {createStore} from "redux";

const USER_LOADED = "USER_LOADED";
const initalState = {
  email: null,
  _id: null
};

const authReducer = (state = initalState, action) => {
  switch(action.type){
    case USER_LOADED: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(authReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: USER_LOADED,
  payload: {
    email: "test123@gmail.ee",
    _id: 2
  }
});

store.dispatch({
  type: USER_LOADED,
  payload: {
    email: "54321@gmail.ee",
    _id: 10
  }
});

export default store;