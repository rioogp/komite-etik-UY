import Input from "../../components/input/Input";
import ContainerFormLayout from "../../components/authentication/ContainerFormLayout";
import FormRowInput from "../../components/input/FormRowInput";
import HeadingAuthentication from "../../components/authentication/HeadingAuthentication";
import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { theme } from "../../utils/theme";
import { useState } from "react";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerFormLayout paddingVertical="py-16">
      <HeadingAuthentication
        title="Lengkapi Data Berikut"
        margin="mb-5"
        type="other"
      />

      <FormRowInput>
        <span className="font-medium text-md">Nama</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan nama"
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Username</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan username"
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Email</span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Masukkan email"
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Password</span>
        <OutlinedInput
          placeholder="Masukkan password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-md">Konfirmasi Password</span>
        <OutlinedInput
          placeholder="Masukkan konfirmasi password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormRowInput>

      <label className="flex items-center gap-4">
        <Checkbox
          defaultChecked
          sx={{
            color: "#006A74",
            "& .MuiSvgIcon-root": {
              height: "30px",
              width: "30px",
            },
            "&.Mui-checked": {
              color: "#047e8a",
            },
          }}
        />
        <span className="text-md">
          Saya menyatakan bahwa data yang saya isi adalah benar dan saya
          bertanggung jawab penuh atas yang saya isi
        </span>
      </label>

      <ThemeProvider theme={theme}>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-auto h-16"
        >
          Kirim Ulasan
        </Button>
      </ThemeProvider>
    </ContainerFormLayout>
  );
}

export default RegisterForm;
