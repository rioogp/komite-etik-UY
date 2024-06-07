import { Divider, ThemeProvider } from "@mui/material";
import Heading from "../../components/Heading";
import { theme } from "../../utils/theme";
import EditNameForm from "./EditNameForm";
import EditPasswordForm from "./EditPasswordForm";

function EditProfileForm({ name }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col gap-4 w-full">
        <div className="mt-10">
          <Heading type="custom" fontSize="text-xl md:text-2xl mb-8">
            Profil Akun
          </Heading>
          <Divider color="black" />
        </div>
        <EditNameForm name={name} />
        <EditPasswordForm />
      </div>
    </ThemeProvider>
  );
}

export default EditProfileForm;
