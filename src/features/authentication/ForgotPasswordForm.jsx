import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import FormRowInput from "../../components/input/FormRowInput";
import Input from "../../components/input/Input";
import Button from "../../components/Button";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";

function ForgotPasswordForm() {
  return (
    <ContainerFormLayout paddingVertical="py-36">
      <HeadingAuthentication
        title="Lupa Password"
        type="primary"
        margin="mb-10"
      />

      <FormRowInput>
        <span className="font-medium text-sm">Email</span>
        <Input type="text" placeholder="Masukkan Username" />
      </FormRowInput>

      <Button type="primary">Kirim</Button>
    </ContainerFormLayout>
  );
}

export default ForgotPasswordForm;
