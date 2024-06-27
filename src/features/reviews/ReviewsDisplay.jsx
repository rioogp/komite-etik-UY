import { AnimatePresence } from "framer-motion";
import Heading from "../../components/Heading";
import SectionColContainer from "../../components/SectionColContainer";
import { motion } from "framer-motion";
import { container } from "../../utils/variants";
import { useInView } from "react-intersection-observer";
import ReviewCard from "./ReviewCard";
import { useReviews } from "./useReviews";
import { CircularProgress } from "@mui/material";

function ReviewsDisplay() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });

  const { reviews, isLoading, error } = useReviews();

  if (isLoading) {
    return (
      <div className="w-full text-center">
        <CircularProgress size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-2xl font-semibold text-center">
        Tidak ada data ulasan tersedia!
      </div>
    );
  }

  return (
    <SectionColContainer style="px-5 items-center">
      <span className="text-md font-semibold text-color-primary">Ulasan</span>
      <Heading
        type="custom"
        fontSize="text-3xl md:text-4xl"
        color="text-black"
        width="max-w-[70rem]"
        center="text-center"
      >
        Apa kata mereka?
      </Heading>
      <p className="text-slate-500 text-md md:text-lg max-w-[70rem] text-center mb-16 md:mb-24">
        Deskripsi ini mengeksplorasi tanggapan dan pendapat pengguna terhadap
        pengalaman menggunakan sebuah website ini, memberikan wawasan berharga
        untuk perbaikan dan pengembangan yang lebih baik.
      </p>

      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap gap-x-4 gap-y-8 justify-center"
        >
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionColContainer>
  );
}

export default ReviewsDisplay;
