import Heading from "../../components/Heading";
import Item from "../../components/Item";
import SectionColContainer from "../../components/SectionColContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container } from "../../utils/variants";

function Rules() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });
  const tasks = [
    {
      title: "Kesopanan dan Hormat",
      description:
        "Berkomunikasi dengan sopan dan menghormati pendapat serta keberagaman orang lain, tanpa melakukan pelecehan atau penyalahgunaan verbal.",
    },
    {
      title: "Kejujuran dan Keterbukaan",
      description:
        "Memberikan informasi yang akurat dan jelas, serta menghindari penipuan, manipulasi, atau menyembunyikan fakta yang relevan",
    },
    {
      title: "Privasi dan Keamanan",
      description:
        "Menghormati privasi orang lain dengan tidak membagikan informasi pribadi tanpa izin, serta menjaga keamanan data pribadi dan sensitif.",
    },
    {
      title: "Toleransi dan Inklusivitas",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      title: "Penggunaan yang Bertanggung Jawab",
      description:
        " Menggunakan platform dan fitur online dengan bijaksana, tanpa menyebarkan konten yang merugikan atau menyesatkan.",
    },
    {
      title: "Kesadaran dan Partisipasi yang Beretika",
      description:
        "Meningkatkan kesadaran tentang dampak perilaku online kita dan berpartisipasi dalam pembangunan komunitas online yang sehat dan beretika.",
    },
  ];

  return (
    <SectionColContainer items="items-center">
      <Heading
        type="custom"
        fontSize="text-5xl"
        color="text-black"
        width="max-w-[70rem]"
        center="text-center"
      >
        Etika Website: Panduan Etik untuk Pengalaman Online yang Bermartabat
      </Heading>
      <p className="text-slate-500 text-2xl max-w-[90rem] text-center mb-24">
        Aturan dan norma-norma yang mengatur interaksi online dengan hormat,
        kejujuran, dan kesadaran akan tanggung jawab kita sebagai pengguna. Kode
        etik ini membentuk pengalaman online yang inklusif, aman, dan
        bermartabat bagi semua orang.
      </p>

      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap gap-x-16 gap-y-36 justify-center items-center"
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

export default Rules;
