import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerification } from "../features/authentication/useVerification";
import usePageTitle from "../hooks/usePageTitle";

function VerificationSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { token } = useParams();
  const { verifyEmail } = useVerification();
  usePageTitle("Verifikasi Berhasil | Komite Etik");

  useEffect(() => {
    verifyEmail(token);
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/login");
    }
  }, [countdown, navigate]);

  return (
    <section className="my-20 mx-[1rem] md:mx-[6rem] lg:mx-[25rem] text-center">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Verifikasi Berhasil
      </h1>
      <p className="text-sm md:text-base">
        Anda akan dialihkan ke halaman login dalam beberapa saat...
      </p>
    </section>
  );
}

export default VerificationSuccess;
