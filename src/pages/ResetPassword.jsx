import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import usePageTitle from "../hooks/usePageTitle";

function ResetPassword() {
  usePageTitle("Ubah Password | Komite Etik");

  return (
    <AuthenticationLayout>
      <ResetPasswordForm />
    </AuthenticationLayout>
  );
}

export default ResetPassword;
