import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const token =
   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjc2ODgwOTMyLCJleHAiOjE2Nzc0ODU3MzIsIm5iZiI6MTY3Njg4MDkzMiwianRpIjoiejVkeHBBT2JPUnIyYTJUUiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.35jXUQFKNKFdxcd8aU85-uhFQAIVJUadvKeypzL5k_c";
   
export const login = (data) => {
   return axios.post(baseUrl + "/login", data);
};

export const register = (data) => {
   return axios.post(baseUrl + "/register", data);
};

