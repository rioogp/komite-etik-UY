import { ThemeProvider } from "@emotion/react";
import Heading from "../../../components/Heading";
import { theme } from "../../../utils/theme";
import { Button } from "@mui/material";
import { useSendStatus } from "../useSendStatus";

function DocumentDecision({ reviewers, id }) {
  const { sendStatus, isUpdating } = useSendStatus();

  return (
    <section className="flex flex-col gap-10 overflow-auto">
      <div className="flex flex-col gap-5">
        <Heading type="custom" fontSize="text-3xl">
          Status
        </Heading>
        <ul className="text-xl list-disc list-inside flex flex-col gap-3">
          {reviewers.map((reviewer) => (
            <li>
              <span className="text-xl">
                {reviewer.name} : {reviewer.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <Heading type="custom" fontSize="text-3xl">
          Komentar
        </Heading>
        <ul className="text-xl list-disc list-inside flex flex-col gap-3">
          {reviewers.map((reviewer) => (
            <li>
              <span className="text-xl">
                {reviewer.name} : {reviewer.message}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 justify-between">
        <ThemeProvider theme={theme}>
          <Button
            sx={{ textTransform: "none", fontSize: 16 }}
            variant="contained"
            color="success"
            className="w-44 h-12"
            disabled={isUpdating}
            onClick={() => sendStatus({ status: "Tidak Layak", id })}
          >
            Kirim Ke Pengaju
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 16 }}
            variant="contained"
            color="success"
            className="w-44 h-12"
            disabled={isUpdating}
            onClick={() => sendStatus({ status: "Sedang Ditandatangani", id })}
          >
            Kirim Ke Ketua
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
}

export default DocumentDecision;
