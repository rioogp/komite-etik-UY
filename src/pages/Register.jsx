import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import RegisterForm from "../features/authentication/RegisterForm";
import usePageTitle from "../hooks/usePageTitle";

function Register() {
  usePageTitle("Daftar | Komite Etik");

  return (
    <AuthenticationLayout>
      <RegisterForm />
    </AuthenticationLayout>
  );
}

export default Register;
