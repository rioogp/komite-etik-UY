import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePhotoProfile } from "../../services/user";
import toast from "react-hot-toast";

export function useUpdatePhotoProfile(onClose) {
  const queryClient = useQueryClient();

  const { mutate: updatePhoto, isPending: isUpdating } = useMutation({
    mutationFn: updatePhotoProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries("user");
      toast.success("Foto profil berhasil diperbarui!");
      onClose();
    },

    onError: () => {
      toast.error("Terjadi kesalahan saat memperbarui foto profil!");
    },
  });

  return { updatePhoto, isUpdating };
}
