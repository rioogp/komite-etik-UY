import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

export async function getReviews() {
  try {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data.data.reviews;
  } catch (err) {
    throw new Error(err);
  }
}

export async function createReview({ description }) {
  try {
    const response = await axios.post(
      `${API_URL}/reviews`,
      { description },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err);
  }
}
