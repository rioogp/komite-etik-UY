import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getMeetings() {
  try {
    const response = await axios.get(`${API_URL}/meetings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data.meeting;
  } catch (err) {
    throw new Error(err);
  }
}
