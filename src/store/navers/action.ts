import api from "../../services/api";
import { Types, NaverCreate } from "./types";

export function naverAction() {
  return (dispatch: any) => {
    api
      .get("/navers")
      .then((res) => {
        dispatch({ type: Types.NAVERS, payload: res.data });
      })
      .catch((err) => {});
  };
}

export function naverFindOneAction(id: string) {
  return (dispatch: any) => {
    api
      .get(`/navers/${id}`)
      .then((res) => {
        dispatch({ type: Types.NAVER_FIND_ONE, payload: res.data });
      })
      .catch((err) => {});
  };
}

export function naverCreateAction(data: NaverCreate) {
  return (dispatch: any) => {
    api
      .post("/navers", data)
      .then((res) => {
        dispatch({ type: Types.NAVER_CREATE, payload: res.data });
      })
      .catch((err) => {});
  };
}
export function naverUpdateAction(data: NaverCreate, id: string) {
  return (dispatch: any) => {
    api
      .put(`/navers/${id}`, data)
      .then((res) => {
        dispatch({ type: Types.NAVER_UPDATE, payload: res.data });
      })
      .catch((err) => {});
  };
}
export function naverDeleteAction(id: number) {
  return (dispatch: any) => {
    api
      .delete(`/navers/${id}`)
      .then((res) => {
        dispatch({ type: Types.NAVER_DELETE, payload: res.data });
      })
      .catch((err) => {});
  };
}
