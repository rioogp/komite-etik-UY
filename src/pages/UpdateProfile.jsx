import { Button, Divider } from "@mui/material";
import Heading from "../components/Heading";
import ProfileCard from "../features/authentication/ProfileCard";
import { IoMdArrowBack } from "react-icons/io";
import { useUser } from "../features/authentication/useUser";
import EditProfileForm from "../features/authentication/EditProfileForm";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function UpdateProfile() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  usePageTitle("Perbarui Profil | Komite Etik");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="py-8 px-2 md:px-5 flex flex-col gap-8">
      <div className="flex justify-start items-center gap-4 md:gap-8">
        <Button
          variant="none"
          color="info"
          className="w-12 h-12"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack size={28} />
        </Button>

        <div>
          <Heading type="custom" fontSize="text-3xl">
            Profil
          </Heading>
          <span className="text-color-primary text-sm md:text-md font-medium">
            Jadikan profil Anda lebih menarik
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-16">
        <ProfileCard user={user} />
        <EditProfileForm name={user.user.name} />
      </div>
    </main>
  );
}

export default UpdateProfile;
