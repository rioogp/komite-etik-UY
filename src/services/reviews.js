import axiosInstance from "../utils/axiosInstance";

export async function getReviews() {
  try {
    const response = await axiosInstance.get(`/reviews`);
    return response.data.data.reviews;
  } catch (err) {
    throw new Error(err);
  }
}

export async function createReview({ name, description }) {
  try {
    const response = await axiosInstance.post(
      `/reviews`,
      { name, description },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err);
  }
}
