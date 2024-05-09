import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getUser() {
  try {
    const response = await axios.get(
      `${API_URL}/users/${localStorage.getItem("userId")}`
    );
    return response.data.data.user;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getUsers() {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.data.users;
  } catch (err) {
    throw new Error(err);
  }
}
