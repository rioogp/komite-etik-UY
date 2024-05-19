import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getStatistics() {
  try {
    const response = await axios.get(`${API_URL}/statistics`);
    return response.data.data;
  } catch (err) {
    return new Error("Terjadi kesalahan saat ingin mendapatkan data");
  }
}
