import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import LoginForm from "../features/authentication/LoginForm";
import usePageTitle from "../hooks/usePageTitle";

function Login() {
  usePageTitle("Login | Komite Etik");

  return (
    <AuthenticationLayout>
      <LoginForm />
    </AuthenticationLayout>
  );
}

export default Login;