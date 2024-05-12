import Heading from "../../components/Heading";
import Item from "../../components/Item";
import SectionColContainer from "../../components/SectionColContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container } from "../../utils/variants";

const tasks = [
  {
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Task 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Task 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Task 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Task 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Task 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Task() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <SectionColContainer items="items-center">
      <Heading type="custom" fontSize="text-4xl md:text-5xl" color="text-black">
        Tugas Komite Etik
      </Heading>
      <p className="text-slate-500 text-xl md:text-2xl max-w-[90rem] text-center mb-16 md:mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap gap-x-16 gap-y-14 md:gap-y-36 justify-center items-center"
        >
          {tasks.map((task, index) => (
            <Item
              key={index}
              number={index + 1}
              title={task.title}
              description={task.description}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionColContainer>
  );
}

export default Task;
