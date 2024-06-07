import axiosInstance from "../utils/axiosInstance";

export async function signup({
  name,
  email,
  instance,
  username,
  password,
  passwordConfirm,
}) {
  try {
    const response = await axiosInstance.post(
      `/users/signUp`,
      {
        name,
        email,
        instance,
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
    const response = await axiosInstance.post(
      `/users/login`,
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
    const response = await axiosInstance.get(`/users/verify-email/${token}`);
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
    const response = await axiosInstance.post(
      `/users/resend-verify-email`,
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
    const response = await axiosInstance.post(
      `/users/forgotPassword`,
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
    const response = await axiosInstance.patch(
      `/users/resetPassword/${token}`,
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
