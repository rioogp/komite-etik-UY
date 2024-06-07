import axiosInstance from "../utils/axiosInstance";

export async function getStatistics() {
  try {
    const response = await axiosInstance.get(`/statistics`);
    return response.data.data;
  } catch (err) {
    return new Error("Terjadi kesalahan saat ingin mendapatkan data");
  }
}
