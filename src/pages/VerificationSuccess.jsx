import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerification } from "../features/authentication/useVerification";

function VerificationSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { token } = useParams();
  const { verifyEmail } = useVerification();

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
    <section className="my-20 mx-[35rem] text-center">
      <h1 className="text-3xl font-bold mb-4">Verification Success</h1>
      <p className="text-lg">
        You will be redirected to the login page in {countdown} seconds...
      </p>
    </section>
  );
}

export default VerificationSuccess;
