import { SET_USER } from "../constants/index";

const userReducer = (state = {value: 'Beno'}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, value: action.value };

    default:
      return state;
  }
}

export default userReducer;