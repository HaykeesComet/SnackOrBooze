import axios from "axios";
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;


class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addItem(type, item) {
    const result = await axios.post(`${BASE_API_URL}/${type}`, item);
    return result.data;
  }
}

export default SnackOrBoozeApi;
