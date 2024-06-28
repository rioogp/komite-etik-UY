import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import usePageTitle from "../hooks/usePageTitle";

function ForgotPassword() {
  usePageTitle("Lupa Kata Sandi | Komite Etik");

  return (
    <AuthenticationLayout>
      <ForgotPasswordForm />
    </AuthenticationLayout>
  );
}

export default ForgotPassword;
