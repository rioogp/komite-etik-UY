import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getStatistics() {
  try {
    const response = await axios.get(`${API_URL}/statistics`);
    return response.data.data;
  } catch (err) {
    return new Error("Terjadi kesalahan saat ingin mendapatkan data");
  }
}
