import { Avatar, Button, Divider, ThemeProvider } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { theme } from "../../utils/theme";
import ModalComponent from "../../components/ModalComponent";
import EditPhotoProfileForm from "./EditPhotoProfileForm";

function ProfileCard({ user }) {
  return (
    <section className="bg-color-primary w-[45rem] h-full pt-10 pb-60 flex flex-col gap-8 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-5">
        <Avatar
          alt="User Image"
          src={user.photoURL}
          sx={{ width: 160, height: 160 }}
        />
        <div className="text-center flex flex-col gap-3">
          <span className="text-4xl text-white">{user.user.name}</span>
          <span className="text-white text-xl font-light">Pengguna</span>
        </div>
      </div>
      <Divider style={{ background: "white", width: "auto" }} />
      <div className="flex flex-col gap-6 px-8">
        <span className="text-white text-2xl">Contact</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <MdOutlineEmail size={28} color="white" />
            <span className="text-white text-xl ml-2">Email</span>
          </div>
          <span className="text-white text-xl">{user.user.email}</span>
        </div>
        <ThemeProvider theme={theme}>
          <ModalComponent>
            <ModalComponent.OpenButton>
              <Button
                sx={{
                  fontWeight: "600",
                  fontSize: 18,
                  textTransform: "none",
                  color: "#006A74",
                }}
                variant="contained"
                color="info"
                className="w-full h-12"
                onClick={() => navigate("/home")}
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
