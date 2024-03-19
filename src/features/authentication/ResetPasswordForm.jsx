import Button from "../../components/Button";
import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import FormRowInput from "../../components/input/FormRowInput";
import Input from "../../components/input/Input";

function ResetPasswordForm() {
  return (
    <ContainerFormLayout paddingVertical="py-36">
      <HeadingAuthentication
        title="Ubah Password"
        type="primary"
        margin="mb-10"
      />

      <FormRowInput>
        <span className="font-medium text-sm">Password Baru</span>
        <Input type="text" placeholder="Masukkan Password Baru" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Konfirmasi Password Baru</span>
        <Input type="text" placeholder="Masukkan Konfirmasi Password Baru" />
      </FormRowInput>

      <Button type="primary">Ubah</Button>
    </ContainerFormLayout>
  );
}

export default ResetPasswordForm;
