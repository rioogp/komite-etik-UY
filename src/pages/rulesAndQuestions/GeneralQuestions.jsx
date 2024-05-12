import Heading from "../../components/Heading";
import SectionColContainer from "../../components/SectionColContainer";
import { container } from "../../utils/variants";
import CardItem from "./CardItem";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function GeneralQuestions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <SectionColContainer items="items-center">
      <Heading
        type="custom"
        fontSize="text-4xl md:text-5xl"
        color="text-black"
        width="max-w-[70rem]"
        center="text-center"
      >
        Pertanyaan <span className="text-color-primary">Umum</span>
      </Heading>
      <span className="text-slate-500 text-xl md:text-2xl max-w-[90rem] text-center mb-16 md:mb-24">
        Berikut telah kami rangkum beberapa pertanyaan yang sering ditanyakan
        terkait layanan kami.
      </span>

      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap gap-8 justify-center px-5 md:px-32"
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </motion.div>
      </AnimatePresence>
    </SectionColContainer>
  );
}

export default GeneralQuestions;
