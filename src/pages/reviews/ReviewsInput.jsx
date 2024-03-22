import { Button, TextField, ThemeProvider } from "@mui/material";
import Heading from "../../components/Heading";
import SectionColContainer from "../../components/SectionColContainer";
import { theme } from "../../utils/theme";

function ReviewsInput() {
  return (
    <SectionColContainer>
      <Heading
        type="custom"
        fontSize="text-5xl"
        color="text-black"
        width="max-w-[70rem]"
      >
        Berikan Ulasan
      </Heading>
      <span className="text-2xl text-slate-500">
        Berikan ulasan anda mengenai website ini.
      </span>
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-multiline-static"
          label="Ulasan"
          placeholder="Masukkan Ulasan Anda"
          multiline
          rows={10}
          className="text-[100px]"
        />

        <div className="flex justify-end">
          <Button variant="contained" color="success" className="w-auto h-14">
            Kirim Ulasan
          </Button>
        </div>
      </ThemeProvider>
    </SectionColContainer>
  );
}

export default ReviewsInput;
