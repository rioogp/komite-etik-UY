import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "../utils/theme";

function Hero({ title, title2, typeImage, page, desc }) {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
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
  const text2 = title2 && title2.split(" ");
  const description =
    `Di Universitas Yarsi, kami berkomitmen untuk menjunjung tinggi
  nilai-nilai etika dan moral dalam setiap aspek kehidupan dan kegiatan
  akademik kami. Kode Etik Universitas Yarsi menjadi pedoman bagi semua
  anggota komunitas kami, baik mahasiswa, dosen, maupun staff, untuk
  bertindak dengan integritas, kejujuran, dan tanggung jawab.`.split(" ");

  return (
    <motion.section
      className={`${image} bg-no-repeat bg-cover w-full h-fit md:h-auto`}
    >
      <motion.div className="px-5 md:px-24 xl:px-36 pt-32 xl:py-52 flex flex-col justify-center gap-2">
        <Heading type="heroTitle" color="text-white">
          {textAnimation(text, 0.8)}
        </Heading>
        {title2 && (
          <Heading type="heroTitle" color="text-white">
            {textAnimation(text2, 0.8)}
          </Heading>
        )}
        <p className="text-white text-sm md:text-2xl mt-8 mb-8 max-w-[60rem]">
          {desc
            ? textAnimation(desc.split(" "), 1)
            : textAnimation(description, 1)}
        </p>
        {page === "ulasan" || (
          <ThemeProvider theme={theme}>
            <Button
              sx={{
                marginTop: "20px",
                fontWeight: "600",
                fontSize: isSmallScreen
                  ? "0.875rem"
                  : isMediumScreen
                  ? "1rem"
                  : isLargeScreen
                  ? "1.25rem"
                  : "1rem",
                "& .MuiButton-startIcon": {
                  marginRight: isSmallScreen
                    ? "0.25rem"
                    : isMediumScreen
                    ? "0.5rem"
                    : isLargeScreen
                    ? "0.75rem"
                    : "0.5rem",
                },
                textTransform: "none",
                mt: "50px",
                mb: "100px",
              }}
              variant="contained"
              color="info"
              className="w-40 sm:w-54 md:w-56 h-12 md:h-14 flex gap-3 justify-center items-center"
              onClick={() => navigate("/home")}
            >
              Get Started <IoIosArrowRoundForward size={28} />
            </Button>
          </ThemeProvider>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Hero;
