import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

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

export async function updateName({ name }) {
  try {
    const response = await axios.patch(
      `${API_URL}/users/updateName`,
      { name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updatePassword({
  currentPassword,
  password,
  passwordConfirm,
}) {
  try {
    const response = await axios.patch(
      `${API_URL}/users/updatePassword`,
      { currentPassword, password, passwordConfirm },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
