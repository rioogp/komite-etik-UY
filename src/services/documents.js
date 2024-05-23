import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getDocumentsByUser(filter) {
  try {
    const response = await axios.get(
      `${API_URL}/documents/user?filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data.documents;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getDocuments(filter) {
  try {
    const response = await axios.get(`${API_URL}/documents?filter=${filter}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data.documents;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getDocument(id) {
  try {
    const response = await axios.get(`${API_URL}/documents/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data.document;
  } catch (e) {
    throw new Error(err.message);
  }
}

export async function downloadDocument(filename) {
  try {
    const response = await axios.get(
      `${API_URL}/documents/download/${filename}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(response.data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function uploadDocument(formData) {
  try {
    const response = await axios.post(`${API_URL}/documents`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    throw new Error(error);
  }
}

export async function updateDocument({ formData, id }) {
  try {
    const response = await axios.patch(`${API_URL}/documents/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    throw new Error(error);
  }
}

export async function addReviewers({ reviewers, id }) {
  try {
    const response = await axios.patch(
      `${API_URL}/documents/${id}/reviewers`,
      { reviewers },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error(error.message);
  }
}

export async function updateStatusReviewers({ status, message, id }) {
  try {
    const response = await axios.patch(
      `${API_URL}/documents/${id}/status`,
      { status, message },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error(error.message);
  }
}

export async function sendStatus({ status, id }) {
  try {
    const response = await axios.patch(
      `${API_URL}/documents/${id}/status/send`,
      { status },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    throw new Error(error.message);
  }
}
