import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

export async function getNotifications() {
  try {
    const response = await axiosInstance.get(`/notifications`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data.notifications;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getUnreadNotifications() {
  try {
    const response = await axiosInstance.get(
      `/notifications/unread-notifications`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.unreadCount;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function markNotificationAsRead() {
  try {
    const response = await axiosInstance.patch(
      `/notifications/mark-as-read`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (e) {
    throw new Error(e.message);
  }
}
