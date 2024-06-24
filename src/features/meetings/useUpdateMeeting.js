import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateMeeting as updateMeetingApi } from "../../services/meetings";

export function useUpdateMeeting(onClose) {
  const queryClient = useQueryClient();

  const { mutate: updateMeeting, isPending: isUpdating } = useMutation({
    mutationFn: ({ newMeetingData, id }) =>
      updateMeetingApi(newMeetingData, id),
    onSuccess: () => {
      toast.success("Ubah data pertemuan berhasil!");
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
      onClose();
    },
    onError: () =>
      toast.error("Terjadi kesalahan saat mengubah data pertemuan!"),
  });

  return { isUpdating, updateMeeting };
}
