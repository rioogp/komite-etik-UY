import { useParams } from "react-router-dom";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import usePageTitle from "../hooks/usePageTitle";

function ResetPassword() {
  const { token } = useParams();
  usePageTitle("Ubah Kata Sandi | Komite Etik");

  return (
    <AuthenticationLayout>
      <ResetPasswordForm token={token} />
    </AuthenticationLayout>
  );
}

export default ResetPassword;
