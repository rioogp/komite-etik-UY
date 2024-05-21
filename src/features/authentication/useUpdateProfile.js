import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePhotoProfile } from "../../services/user";
import toast from "react-hot-toast";

export function useUpdatePhotoProfile() {
  const queryClient = useQueryClient();

  const { mutate: updatePhoto, isLoading: isUpdating } = useMutation({
    mutationFn: updatePhotoProfile,
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      toast.success("Foto profil berhasil diperbarui!");
    },

    onError: () => {
      toast.error("Terjadi kesalahan saat memperbarui foto profil!");
    },
  });

  return { updatePhoto, isUpdating };
}
