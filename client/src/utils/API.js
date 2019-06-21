import axios from "axios";

export default {
    
    saveJob: function(data) {
      return axios.post("/api/jobs", data);
    }
  };
  