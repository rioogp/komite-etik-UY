import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

export async function getMeetings() {
  try {
    const response = await axiosInstance.get(`/meetings`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.meeting;
  } catch (err) {
    throw new Error(err);
  }
}

export async function createMeeting({ nameMeeting, meetingSchedule }) {
  try {
    const response = await axiosInstance.post(
      `/meetings`,
      {
        nameMeeting,
        meetingSchedule,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteMeeting(id) {
  try {
    const response = await axiosInstance.delete(`/meetings/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateMeeting({ nameMeeting, meetingSchedule }, id) {
  try {
    const response = await axiosInstance.put(
      `/meetings/${id}`,
      {
        nameMeeting,
        meetingSchedule,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err.response);
    throw new Error(err);
  }
}
