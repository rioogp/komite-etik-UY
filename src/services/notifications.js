import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getNotifications() {
  try {
    const response = await axios.get(`${API_URL}/notifications`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(response);
    return response.data.data.notifications;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getUnreadNotifications() {
  try {
    const response = await axios.get(
      `${API_URL}/notifications/unread-notifications`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response);
    return response.data.data.unreadCount;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function markNotificationAsRead() {
  try {
    const response = await axios.patch(
      `${API_URL}/notifications/mark-as-read`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response);
    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}
