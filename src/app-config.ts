import axios, { AxiosResponse } from "axios";

const baseApi = process.env.REACT_APP_baseApi;

export const api = {
  users: baseApi + "/users",
  tutors: baseApi + "/tutors",
  students: baseApi + "/students",
};

export function initializeAxios() {
  axios.defaults.baseURL = baseApi;
  axios.defaults.timeout = 5000;

  axios.interceptors.response.use((response) => response, handleError);
}

function handleError(response: AxiosResponse): AxiosResponse<any, any> {
  throw response;
}
