import { Types } from "./types";

type NAVER_CREATE = {
  wasRaised: boolean;
  data: Navers[];
};

type Navers = {
  id?: number;
  name: string;
  url: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
};

const INITIAL_STATE: NAVER_CREATE = {
  wasRaised: false,
  data: [],
};

export const naverReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.NAVERS:
      return { ...state, data: [...action.payload] };
    case Types.NAVER_CREATE:
      return { ...state, wasRaised: true };
    case Types.NAVER_UPDATE:
      return { ...state, wasRaised: true };
    case Types.NAVER_FIND_ONE:
      return { ...state, data: [action.payload] };
    case Types.NAVER_DELETE:
      return { ...state, wasRaised: true };
    default:
      return state;
  }
};
