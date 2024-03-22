import { AnimatePresence } from "framer-motion";
import Heading from "../../components/Heading";
import SectionColContainer from "../../components/SectionColContainer";
import { motion } from "framer-motion";
import { container } from "../../utils/variants";
import ReviewCard from "./ReviewCard";
import { useInView } from "react-intersection-observer";

function ReviewsDisplay() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });

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
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </motion.div>
      </AnimatePresence>
    </SectionColContainer>
  );
}

export default ReviewsDisplay;
