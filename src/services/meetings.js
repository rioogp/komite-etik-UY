import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getMeetings() {
  try {
    const response = await axios.get(`${API_URL}/meetings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data.meeting;
  } catch (err) {
    throw new Error(err);
  }
}

export async function createMeeting({ nameMeeting, meetingSchedule }) {
  try {
    const response = await axios.post(
      `${API_URL}/meetings`,
      {
        nameMeeting,
        meetingSchedule,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    const response = await axios.delete(`${API_URL}/meetings/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateMeeting({ nameMeeting, meetingSchedule }, id) {
  try {
    const response = await axios.put(
      `${API_URL}/meetings/${id}`,
      {
        nameMeeting,
        meetingSchedule,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err.response);
    throw new Error(err);
  }
}
