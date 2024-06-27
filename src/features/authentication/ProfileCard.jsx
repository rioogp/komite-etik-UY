import { Avatar, Button, Divider, ThemeProvider } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import EditPhotoProfileForm from "./EditPhotoProfileForm";

function ProfileCard({ user }) {
  return (
    <section className="bg-color-primary w-[20rem] sm:w-[24rem] md:w-[42rem] h-fit md:h-full pt-10 pb-28 md:pb-60 flex flex-col gap-8 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-5">
        <Avatar
          alt="User Image"
          src={user.user.photo}
          sx={{ width: 120, height: 120 }}
        />
        <div className="text-center flex flex-col gap-3">
          <span className="text-xl md:text-2xl text-white">
            {user.user.name}
          </span>
          <span className="text-white text-sm md:text-base font-light">
            Pengguna
          </span>
        </div>
      </div>
      <Divider style={{ background: "white", width: "auto" }} />
      <div className="flex flex-col gap-6 px-8">
        <span className="text-white text-lg md:text-xl">Kontak</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <MdOutlineEmail size={22} color="white" />
            <span className="text-white text-sm md:text-base ml-2">Email</span>
          </div>
          <span className="text-white text-sm md:text-base">
            {user.user.email}
          </span>
        </div>
        <ThemeProvider theme={theme}>
          <ModalComponent>
            <ModalComponent.OpenButton>
              <Button
                sx={{
                  fontWeight: "600",
                  fontSize: 13,
                  textTransform: "none",
                  color: "#006A74",
                  height: "2.5rem",
                }}
                variant="contained"
                color="info"
                className="w-full h-12"
              >
                Update Foto Profile
              </Button>
            </ModalComponent.OpenButton>
            <ModalComponent.ModalWindow
              title="Ganti Foto Profile"
              subtitle="Unggah foto profile sesuai dengan seleramu"
            >
              <EditPhotoProfileForm user={user} />
            </ModalComponent.ModalWindow>
          </ModalComponent>
        </ThemeProvider>
      </div>
    </section>
  );
}

export default ProfileCard;
