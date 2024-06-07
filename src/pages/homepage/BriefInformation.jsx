import { useEffect, useRef } from "react";
import Heading from "../../components/Heading";
import CountUp from "react-countup";
import { useStatistics } from "../../features/statistics/useStatistics";
import { CircularProgress } from "@mui/material";

function BriefInformation() {
  const { isLoading, statistics } = useStatistics();

  return (
    <div className="hidden xl:flex flex-col items-center justify-center gap-5 border border-slate-200 shadow-xl rounded-3xl mx-24 mt-[-16rem] p-7 bg-white">
      <Heading type="secondary">Informasi Singkat</Heading>
      <span className="text-lg text-slate-500 max-w-3xl text-center">
        Semua yang perlu dilakukan untuk mengonversi, meninjau, dan
        menyelesaikan lebih banyak administrasi.
      </span>
      <div className="flex flex-row gap-40 flex-wrap items-center justify-center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <InfoBox
              number={statistics.activeUsersCount}
              label="Pengguna Aktif"
            />
            <InfoBox
              number={parseFloat(
                statistics.percentageCompleted.replace("%", "")
              )}
              label="Persentase Selesai"
              isPercentage
            />
            <InfoBox
              number={statistics.uploadedFilesCount}
              label="Berkas Ter-unggah"
            />
          </>
        )}
      </div>
    </div>
  );
}

function InfoBox({ number, label, isPercentage }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <CountUp
        end={number}
        duration={2}
        start={0}
        suffix={isPercentage ? "%" : ""}
        decimals={isPercentage ? 1 : 0}
        decimal=","
        separator=""
      >
        {({ countUpRef }) => (
          <>
            <span
              className="text-5xl text-color-secondary font-bold"
              ref={countUpRef}
            ></span>
            <span className="text-lg font-semibold">{label}</span>
          </>
        )}
      </CountUp>
    </div>
  );
}

export default BriefInformation;
