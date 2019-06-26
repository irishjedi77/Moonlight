import axios from "axios";

export default {
<<<<<<< HEAD

  saveJob: (data) => {
    return axios.post("/api/jobs", data);
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
        authorization: window.localStorage.getItem("user-token")
      }
    });
  }
};
=======
    
    saveJob: (data) => {
      return axios.post("/api/jobs", data);
    }, 
    getJobs: () => {
      return axios.get("/api/jobs")
    }, 
    userSignUp: (data) => {
      return axios.post("/api/user/register", data)
    }, 
    userLogin: (data) => {
      return axios.post("/api/user/login", data)
    }
  };
  
>>>>>>> 57ed1f61488e61b4ec72fa99410b6c6489ed9ebd
