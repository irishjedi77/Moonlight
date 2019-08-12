import axios from "axios";
//import { LoginContext } from "../components/Context/loginContext.js";


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
  getJobsByName: (name, token) => {
    return axios.get("/api/jobs/" + name, {
      headers: {
        authorization: token
      }
    })
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
  getUserInfo: (_id) => {
    return axios.get("/api/update/" + _id, {

    })
  }, 
  deleteJob: (_id, token) => {
    return axios.delete("/api/jobs/" + _id, {
      headers: {
        authorization: token
      }
    })
  },
  // updateName: (data) => {
  //   return axios.put("/api/update/name", data, {
  //     headers: {
  //       authorization: data.token
  //     }
  //   })
  // },
  updateProfile: (data) => {
    return axios.put("/api/update/profile", data, {
      headers: {
        authorization: data.token
      }
    })
  },
  // updatePhone: (data) => {
  //   return axios.put("/api/update/phone", data, {
  //     headers: {
  //       authorization: data.token
  //     }
  //   })
  // },
  // updateEmail: (data) => {
  //   return axios.put("/api/update/email", data, {
  //     headers: {
  //       authorization: data.token
  //     }
  //   })
  // },


};

