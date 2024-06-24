import { ThemeProvider } from "@emotion/react";
import Heading from "../../../components/Heading";
import { theme } from "../../../utils/theme";
import { Button } from "@mui/material";
import { useSendStatus } from "../useSendStatus";
import { useNavigate } from "react-router-dom";
import HandleUpdate from "../../../components/HandleUpdate";

function DocumentDecision({ reviewers, id }) {
  const { sendStatus, isUpdating } = useSendStatus();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-10 px-5 pb-5 md:px-10">
      <div className="flex flex-col gap-5">
        <Heading type="custom" fontSize="text-2xl">
          Status
        </Heading>
        <ul className="text-xl list-disc list-inside flex flex-col gap-3">
          {reviewers.map((reviewer) => (
            <li>
              <span className="text-base">
                {reviewer.name} : {reviewer.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <Heading type="custom" fontSize="text-2xl">
          Komentar
        </Heading>
        <ul className="text-xl list-disc list-inside flex flex-col gap-3">
          {reviewers.map((reviewer) => (
            <li>
              <span className="text-base">
                {reviewer.name} : {reviewer.message}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-5 justify-center md:justify-between">
        <ThemeProvider theme={theme}>
          <Button
            sx={{ textTransform: "none", fontSize: 13 }}
            variant="contained"
            color="success"
            className="w-44 h-12"
            disabled={isUpdating}
            onClick={() =>
              HandleUpdate(
                "Berkas",
                "Apakah Anda yakin ingin mengembalikan berkas ini kepada pengaju sebagai 'Tidak Layak'?",

                "Ya",
                () => sendStatus({ status: "Tidak Layak", id })
              )
            }
          >
            Kirim Ke Pengaju (Tidak Layak)
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 13 }}
            variant="contained"
            color="success"
            className="w-44 h-12"
            disabled={isUpdating}
            onClick={() =>
              HandleUpdate(
                "Berkas",
                "Apakah Anda yakin ingin mengembalikan berkas ini kepada pengaju sebagai 'Perbaikan'?",

                "Ya",
                () => sendStatus({ status: "Perbaikan", id })
              )
            }
          >
            Kirim Ke Pengaju (Perbaikan)
          </Button>

          <Button
            sx={{ textTransform: "none", fontSize: 13 }}
            variant="contained"
            color="success"
            className="w-44 h-12"
            disabled={isUpdating}
            onClick={() =>
              HandleUpdate(
                "Berkas",
                "Apakah Anda ingin menandatangani berkas ini?",
                "Ya",
                () => {
                  sendStatus({ status: "Sedang Ditandatangani", id });
                  navigate("/admin/berkas/konfirmasi-berkas");
                }
              )
            }
          >
            Tandatangani Dokumen
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
}

export default DocumentDecision;
