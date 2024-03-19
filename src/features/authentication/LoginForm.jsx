import Button from "../../components/Button";
import Input from "../../components/input/Input";
import LinkRoute from "../../components/LinkRoute";
import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import FormRowInput from "../../components/input/FormRowInput";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";

function LoginForm() {
  return (
    <ContainerFormLayout paddingVertical="py-36">
      <HeadingAuthentication title="Login" type="primary" margin="mb-12" />

      <FormRowInput>
        <span className="font-medium text-sm">Username</span>
        <Input type="text" placeholder="Masukkan Username" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Password</span>
        <Input type="text" placeholder="Masukkan Username" />
      </FormRowInput>

      <span className="text-sm">
        Belum punya akun? Daftar&nbsp;
        <LinkRoute to="/register" type="secondary">
          di sini
        </LinkRoute>
      </span>
      <LinkRoute type="secondary" to="/forgot-password">
        Forgot Password
      </LinkRoute>

      <Button type="primary">Login</Button>
    </ContainerFormLayout>
  );
}

export default LoginForm;
