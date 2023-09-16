import axios from "axios";

export function setupAuthHeaderForNetworkCalls(token) {
  if (token) {
    axios.defaults.headers.common["AuthenticateUser"] = `Bearer ${token}`;
    return axios.defaults.headers.common["AuthenticateUser"];
  }
  delete axios.defaults.headers.common["AuthenticateUser"];
}
