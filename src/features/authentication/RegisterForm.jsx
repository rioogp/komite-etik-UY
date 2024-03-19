import Input from "../../components/input/Input";
import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import FormRowInput from "../../components/input/FormRowInput";
import Button from "../../components/Button";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";

function RegisterForm() {
  return (
    <ContainerFormLayout paddingVertical="py-24">
      <HeadingAuthentication
        title="Lengkapi Data Berikut"
        margin="mb-5"
        type="other"
      />

      <FormRowInput>
        <span className="font-medium text-sm">Nama</span>
        <Input type="text" placeholder="Masukkan Nama" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Username</span>
        <Input type="text" placeholder="Masukkan Username" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Email</span>
        <Input type="text" placeholder="Masukkan Email" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Password</span>
        <Input type="text" placeholder="Masukkan Password" />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-sm">Konfirmasi Password</span>
        <Input type="text" placeholder="Masukkan Password" />
      </FormRowInput>

      <label className="flex items-center gap-4">
        <Input type="checkbox" />
        <span className="text-sm">
          Saya menyatakan bahwa data yang saya isi adalah benar dan saya
          bertanggung jawab penuh atas yang saya isi
        </span>
      </label>

      <Button type="primary">Daftar</Button>
    </ContainerFormLayout>
  );
}

export default RegisterForm;
