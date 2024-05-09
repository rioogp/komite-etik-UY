import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { sendStatus as sendStatusApi } from "../../services/documents";

export function useSendStatus() {
  const queryClient = useQueryClient();

  const { mutate: sendStatus, isPending: isUpdating } = useMutation({
    mutationFn: sendStatusApi,
    onSuccess: () => {
      toast.success("Berhasil mengirim!");
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: () => toast.error("Terjadi kesalahan saat mengirim!"),
  });

  return { isUpdating, sendStatus };
}
