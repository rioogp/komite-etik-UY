import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import toast from "react-hot-toast";
import { useVerification } from "../features/authentication/useVerification";
import usePageTitle from "../hooks/usePageTitle";

function VerificationUser() {
  const [timer, setTimer] = useState(60);
  const { resendVerification } = useVerification();
  const email = localStorage.getItem("email");
  usePageTitle("Verifikasi Pengguna | Komite Etik");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendEmail = () => {
    if (timer === 0) {
      setTimer(60);
      resendVerification({ email });
    } else {
      toast.error("Anda tidak dapat mengirim ulang email saat ini.");
    }
  };

  return (
    <section className="my-20 mx-[1rem] md:mx-[6rem] lg:mx-[25rem] text-center">
      <Heading type="primary">Verifikasi Email</Heading>
      <span className="text-4xl md:text-6xl text-center text-color-primary font-semibold">
        {formatTime(timer)}
      </span>
      <p className="text-sm md:text-base mt-10">
        Silakan periksa kotak masuk email Anda untuk menemukan instruksi lebih
        lanjut mengenai proses verifikasi pendaftaran.
      </p>
      <div className="flex items-center justify-center mt-20 gap-2">
        <p className="text-sm md:text-base">Email belum terkirim?</p>
        <button
          onClick={handleResendEmail}
          className="text-color-primary text-sm md:text-base"
        >
          Kirim Ulang
        </button>
      </div>
    </section>
  );
}

export default VerificationUser;
