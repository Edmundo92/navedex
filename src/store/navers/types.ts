export const Types = {
  NAVERS: "NAVERS",
  NAVER_CREATE: "NAVER_CREATE",
  NAVER_DELETE: "NAVER_DELETE",
  NAVER_UPDATE: "NAVER_UPDATE",
  NAVER_FIND_ONE: "NAVER_FIND_ONE",
};

export type Login = {
  email: string;
  password: string;
};

export type NaverCreate = {
  id?: number;
  name: string;
  url: string;
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
};
