import Heading from "./Heading";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
function Item({ number, title, description }) {
  return (
    <motion.div
      variants={item}
      className="flex flex-col justify-center items-center text-center gap-5 basis-1/4"
    >
      <div className="bg-slate-100 rounded-full h-14 w-14 text-center flex items-center justify-center">
        <span className="md:w-10 md:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-xl font-semibold">
          {number}
        </span>
      </div>
      <Heading type="custom" fontSize="text-2xl">
        {title}
      </Heading>
      <p className="text-slate-500 text-lg md:text-xl w-[20rem] md:w-[30rem]">
        {description}
      </p>
    </motion.div>
  );
}

export default Item;
