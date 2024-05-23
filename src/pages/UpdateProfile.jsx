import { Button, Divider } from "@mui/material";
import Heading from "../components/Heading";
import ProfileCard from "../features/authentication/ProfileCard";
import { IoMdArrowBack } from "react-icons/io";
import { useUser } from "../features/authentication/useUser";
import EditProfileForm from "../features/authentication/EditProfileForm";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="py-14 px-10 flex flex-col gap-8">
      <div className="flex justify-start items-center gap-8">
        <Button
          variant="none"
          color="info"
          className="w-12 h-12"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack size={30} />
        </Button>

        <div>
          <Heading type="custom" fontSize="text-4xl">
            Profile
          </Heading>
          <span className="text-color-primary text-lg font-medium">
            Jadikan profil Anda lebih menarik
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex w-full gap-16">
        <ProfileCard user={user} />
        <EditProfileForm name={user.user.name} />
      </div>
    </main>
  );
}

export default UpdateProfile;
