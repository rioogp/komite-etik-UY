export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate.split("/").reverse().join("/");
};

export const formatMeetingSchedule = (meetingSchedule) => {
  const formattedMeetingSchedule = meetingSchedule
    ? new Date(meetingSchedule)
    : null;
  const isoFormattedMeetingSchedule = formattedMeetingSchedule
    ? formattedMeetingSchedule.toISOString()
    : null;
  return isoFormattedMeetingSchedule;
};