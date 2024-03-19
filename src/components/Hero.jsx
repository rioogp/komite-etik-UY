import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

function Hero({ title, title2, typeImage }) {
  const navigate = useNavigate();
  const image = `${
    typeImage !== "homepage"
      ? 'bg-[url("gedung-contrast.png")]'
      : 'bg-[url("gedung-contrast2.png")]'
  }`;

  function textAnimation(text, duration) {
    return text.map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: duration,
          delay: i / 70,
        }}
        key={i}
      >
        {el}{" "}
      </motion.span>
    ));
  }

  const text = title.split(" ");
  const text2 = title2.split(" ");
  const description =
    `Di Universitas Yarsi, kami berkomitmen untuk menjunjung tinggi
  nilai-nilai etika dan moral dalam setiap aspek kehidupan dan kegiatan
  akademik kami. Kode Etik Universitas Yarsi menjadi pedoman bagi semua
  anggota komunitas kami, baik mahasiswa, dosen, maupun staff, untuk
  bertindak dengan integritas, kejujuran, dan tanggung jawab.`.split(" ");

  return (
    <motion.section className={`${image} bg-no-repeat bg-cover w-full h-auto`}>
      <motion.div className="px-36 py-52 flex flex-col gap-2">
        <Heading type="heroTitle" color="text-white">
          {textAnimation(text, 0.8)}
        </Heading>
        <Heading type="heroTitle" color="text-white">
          {textAnimation(text2, 0.8)}
        </Heading>
        <p className="text-white text-2xl mt-8 mb-8 w-[60rem]">
          {textAnimation(description, 1.5)}
        </p>
        <Button type="whiteSmall" onClick={() => navigate("/berkas")}>
          Get Started <IoIosArrowRoundForward size={28} />
        </Button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
