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
  console.log(typeof reviews);
  console.log(reviews);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>No reviews found</div>;
  }

  return (
    <SectionColContainer items="items-center">
      <span className="text-xl font-semibold text-color-primary">Ulasan</span>
      <Heading
        type="custom"
        fontSize="text-5xl"
        color="text-black"
        width="max-w-[70rem]"
        center="text-center"
      >
        Apa kata mereka?
      </Heading>
      <p className="text-slate-500 text-2xl max-w-[90rem] text-center mb-24">
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
          className="flex flex-row flex-wrap gap-8 justify-center"
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
