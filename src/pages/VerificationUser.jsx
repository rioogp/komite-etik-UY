import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import toast from "react-hot-toast";
import { useVerification } from "../features/authentication/useVerification";

function VerificationUser() {
  const [timer, setTimer] = useState(5);
  const { resendVerification } = useVerification();
  const email = localStorage.getItem("email");

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
      setTimer(5);
      resendVerification({ email });
    } else {
      toast.error("Anda tidak dapat mengirim ulang email saat ini.");
    }
  };

  return (
    <section className="my-20 mx-[35rem] text-center">
      <Heading type="primary">Verifikasi Email</Heading>
      <span className="text-7xl text-color-primary font-semibold">
        {formatTime(timer)}
      </span>
      <p className="text-lg mt-10">
        Silakan periksa kotak masuk email Anda untuk menemukan instruksi lebih
        lanjut mengenai proses verifikasi pendaftaran.
      </p>
      <div className="flex items-center justify-center mt-20 gap-2">
        <p className="text-lg">Email belum terkirim?</p>
        <button
          onClick={handleResendEmail}
          className="text-color-primary text-lg"
        >
          Kirim Ulang
        </button>
      </div>
    </section>
  );
}

export default VerificationUser;
