import { Types } from "./types";

interface Login {
  isValid: boolean;
}

const INITIAL_STATE: Login = {
  isValid: false,
};

export const LoginReducer = (state: Login = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.USER_LOGIN: {
      return { ...state, isValid: true };
    }
    default:
      return state;
  }
};
