import axios from "axios";
import { LoginContext } from "../components/Context/loginContext.js";

const context = LoginContext
export default {
  
  saveJob: (data) => {
    return axios.post("/api/jobs", data, {
      headers: {
        authorization: data.token
      }

    });
  },
  getJobs: () => {
    return axios.get("/api/jobs");
  },
  userSignUp: (data) => {
    return axios.post("/api/user/register", data);
  },
  userLogin: (data) => {
    return axios.post("/api/user/login", data);
  },
  userUpdate: (data) => {
    return axios.put("/api/update", data, {
      headers: {
        authorization: data.token
      }
    });
  }, 
  getUserInfo: (name) => {
    return axios.get("/api/update/" + name, {
      
    })
  }
};

