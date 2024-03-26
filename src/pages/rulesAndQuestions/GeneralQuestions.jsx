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
        fontSize="text-5xl"
        color="text-black"
        width="max-w-[70rem]"
        center="text-center"
      >
        Pertanyaan <span className="text-color-primary">Umum</span>
      </Heading>
      <span className="text-xl font-medium mb-20">
        Berikut telah kami rangkum beberapa pertanyaan yang sering ditanyakan
        terkait layanan kami apkfkenwignweoingioewoigbwoeibgobwegbew.
      </span>

      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap gap-8 justify-center px-10 md:px-40"
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
