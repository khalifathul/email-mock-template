import { SET_USER, ADD_MAIL } from "../constants/index";

export const setUser = (value) =>{
  return{ type: SET_USER, value}
}

export function addMail(payload) {
  return { type: ADD_MAIL, payload };
}


