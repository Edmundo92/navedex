export const TOKEN_KEY = "nave_token";

function set(data: any) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
}

function get() {
  if (localStorage.getItem(TOKEN_KEY)) {
    let data = JSON.parse(localStorage.getItem(TOKEN_KEY) || "{}");
    return data;
  }
}

function remove() {
  localStorage.removeItem(TOKEN_KEY);
}

function isAuthenticated() {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY) || "{}");
  return localStorage.getItem(TOKEN_KEY) !== null && data["token"].length > 0;
}

function getToken() {
  return get()["token"];
}

export const storage = {
  set,
  get,
  remove,
  getToken,
  isAuthenticated,
};
