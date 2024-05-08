import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createMeeting as createMeetingApi } from "../../services/meetings";

export function useCreateMeeting() {
  const queryClient = useQueryClient();

  const { mutate: createMeeting, isPending: isCreating } = useMutation({
    mutationFn: createMeetingApi,
    onSuccess: () => {
      toast.success("Pertemuan berhasil ditambahkan!");
      queryClient.invalidateQueries("reviews");
    },
    onError: (err) => {
      toast.error("Gagal membuat pertemuan!");
      console.log(err);
    },
  });

  return { createMeeting, isCreating };
}
