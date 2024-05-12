import { useEffect, useRef } from "react";
import Heading from "../../components/Heading";
import { CountUp } from "countup.js";

function BriefInformation() {
  return (
    <div className="hidden xl:flex flex-col items-center justify-center gap-5 border border-slate-200 shadow-xl rounded-3xl mx-24 mt-[-20rem] p-10 bg-white">
      <Heading type="secondary">Informasi Singkat</Heading>
      <span className="text-xl text-slate-500 max-w-3xl text-center">
        Semua yang perlu dilakukan untuk mengonversi, meninjau, dan
        menyelesaikan lebih banyak administrasi.
      </span>
      <div className="flex flex-row gap-40 flex-wrap items-center justify-center">
        <InfoBox number="44" label="Pengguna Aktif" />
        <InfoBox number="70" label="Persentase Selesai" />
        <InfoBox number="900" label="Berkas Ter-unggah" />
      </div>
    </div>
  );
}

function InfoBox({ number, label }) {
  const numberRef = useRef(null);
  const countUpRef = useRef(null);

  useEffect(() => {
    const num = parseFloat(number);

    if (numberRef.current) {
      if (countUpRef.current) {
        countUpRef.current.reset();
        countUpRef.current = null;
      }

      countUpRef.current = new CountUp(numberRef.current, num, {
        startVal: 0,
        duration: 2,
      });
      countUpRef.current.start();
    }
  }, [number, label]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <span
        className="text-7xl text-color-secondary font-bold"
        ref={numberRef}
      ></span>
      <span className="text-xl font-semibold">{label}</span>
    </div>
  );
}

export default BriefInformation;
