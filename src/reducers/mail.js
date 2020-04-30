import { ADD_MAIL } from "../constants/index";

const initialState = {
  mails: [
    {id: 1, mail: "Hi Beno, Vestibulum augue neque,", userTo: "Beno", userFrom: "John"},
    {id: 2, mail: "Hi Beno, Vestibulum augue neque,", userTo: "Beno", userFrom: "Mary"},
  	{id: 3, mail: "Hi John, Vestibulum augue neque,", userTo: "John", userFrom: "Beno"},
    {id: 4, mail: "Hi Mary, Vestibulum augue neque,", userTo: "Mary", userFrom: "Beno"},
  ]
};

function mailReducer(state = initialState, action) {
  if (action.type === ADD_MAIL) {
    return Object.assign({}, state, {
      mails: state.mails.concat(action.payload)
    });
  }
  return state;
}

export default mailReducer;