import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getUser() {
  try {
    const response = await axios.get(`${API_URL}/users/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data;
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

export async function updatePhotoProfile(formData) {
  try {
    const response = await axios.patch(
      `${API_URL}/users/updatePhoto`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    throw new Error(err);
  }
}
