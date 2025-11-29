import axios from "axios";

const BASE_URL = "http://192.168.137.1/E_Clearance_backend";

export const API = {
  login: (data) => axios.post(`${BASE_URL}/login.php`, data)
};

export default API;
