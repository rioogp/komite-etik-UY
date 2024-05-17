import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:8000/api/v1";

export async function signup({
  name,
  email,
  username,
  password,
  passwordConfirm,
}) {
  try {
    const response = await axios.post(
      `${API_URL}/users/signUp`,
      {
        name,
        email,
        username,
        password,
        passwordConfirm,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function login({ emailOrUsername, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/users/login`,
      {
        emailOrUsername,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function verifyEmail(token) {
  try {
    const response = await axios.get(`${API_URL}/users/verify-email/${token}`);
    return response.data;
  } catch (err) {
    if (err.response) {
      const errorData = err.response.data;
      console.log("Status Error:", errorData.status);
      console.log("Pesan Error:", errorData.message);
      console.log("Detail Error:", errorData.error);
    } else {
      console.log("Error:", err.message);
    }
    throw err;
  }
}

export async function resendVerification({ email }) {
  try {
    const response = await axios.post(
      `${API_URL}/users/resend-verify-email`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function forgotPassword({ email }) {
  try {
    const response = await axios.post(
      `${API_URL}/users/forgotPassword`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}

export async function resetPassword({ token, password, passwordConfirm }) {
  try {
    const response = await axios.patch(
      `${API_URL}/users/resetPassword/${token}`,
      {
        password,
        passwordConfirm,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
}
