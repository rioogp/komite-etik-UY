import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Heading from "../../components/Heading";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { item } from "../../utils/variants";

function CardItem() {
  return (
    <motion.div variants={item}>
      <Card
        sx={{
          maxWidth: 380,
          bgcolor: "#006A74",
          borderRadius: "10px",
          paddingY: "15px",
          paddingX: "5px",
        }}
        variant="outlined"
      >
        <CardContent className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Heading
              type="custom"
              fontSize="text-2xl sm:text-3xl"
              color="text-white"
            >
              Pertanyaan
            </Heading>
            <Typography
              sx={{ color: "white", fontWeight: "100", fontSize: "18px" }}
              component="div"
            >
              Apa tujuan utama dari adanya kode etik yang diatur di website
              Universitas YARSI?
            </Typography>
          </div>
          <span className="bg-white text-center text-color-primary font-semibold p-2 rounded-md">
            Jawaban
          </span>
          <div className="flex gap-5 justify-center items-start">
            <IoIosCheckmarkCircle
              className="basis-1/2"
              color="white"
              size={50}
            />
            <Typography
              sx={{
                color: "white",
                fontWeight: "100",
                maxWidth: 285,
                marginTop: "15px",
              }}
              component="div"
            >
              Kode etik di website Universitas YARSI ditetapkan untuk memberikan
              panduan dan standar perilaku yang diharapkan dari semua anggota
              komunitas kampus, termasuk mahasiswa, dosen, dan staf.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default CardItem;
