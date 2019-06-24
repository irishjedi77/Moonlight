import axios from "axios";

export default {
    
    saveJob: (data) => {
      return axios.post("/api/jobs", data);
    }, 
    getJobs: () => {
      return axios.get("/api/jobs")
    }
  };
  