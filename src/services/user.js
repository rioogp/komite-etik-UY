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

export async function createUser({
  name,
  username,
  email,
  instance,
  role,
  password,
}) {
  try {
    const response = await axios.post(
      `${API_URL}/users`,
      { name, username, email, instance, role, password },
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

export async function updateUser({
  name,
  username,
  email,
  instance,
  role,
  password,
  id,
}) {
  try {
    const response = await axios.patch(
      `${API_URL}/users/${id}`,
      { name, username, email, instance, role, password },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.response);
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data.user;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
