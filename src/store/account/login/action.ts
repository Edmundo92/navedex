import { Types, Login } from "./types";
import { storage } from "../../../helpers/storage";
import api from "../../../services/api";

export function loginAction(values: Login) {
  return submit(values);
}

export function logoutAction() {
  return storage.remove();
}

function submit(values: Login) {
  return (dispatch: any) => {
    api
      .post("/users/login", values)
      .then((res) => {
        storage.set(res.data);
        dispatch({ type: Types.USER_LOGIN, payload: res.data });
      })
      .catch((err) => {});
  };
}
