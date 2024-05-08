import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getDocumentsByUser() {
  try {
    const response = await axios.get(`${API_URL}/documents/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data.data.documents;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function downloadDocument(filename) {
  try {
    const response = await axios.get(`${API_URL}/documents/${filename}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(response.data); // Respons data sudah dalam bentuk Blob
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
