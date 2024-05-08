import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteMeeting as deleteMeetingApi } from "../../services/meetings";
export function useDeleteMeeting() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteMeeting } = useMutation({
    mutationFn: deleteMeetingApi,
    onSuccess: () => {
      toast.success("Berhasil menghapus data pertemuan");

      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      });
    },
    onError: (err) =>
      toast.error("Terjadi kesalahan saat menghapus data pertemuan"),
  });

  return { isPending, deleteMeeting };
}
