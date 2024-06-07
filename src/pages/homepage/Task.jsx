import Heading from "../../components/Heading";
import Item from "../../components/Item";
import SectionColContainer from "../../components/SectionColContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container } from "../../utils/variants";

const tasks = [
  {
    title: "Pengajuan Belum Dipublikasikan",
    description:
      "Pengajuan belum pernah dipublikasikan sebelumnya, juga belum pernah diajukan ke jurnal lain untuk dipertimbangkan (atau penjelasannya telah diberikan di Komentar kepada Editor).",
  },
  {
    title: "Format Dokumen",
    description:
      "Semua file yang diserahkan harus dalam format file dokumen PDF (Portable Document Format) untuk menjaga integritas dan konsistensi dokumen, serta memudahkan proses pengarsipan dan distribusi.",
  },
  {
    title: "URL Untuk Refrensi",
    description:
      "Demi menghormati hak cipta dan memberikan atribusi yang sesuai kepada pemilik konten, URL (Uniform Resource Locator) untuk referensi telah dimasukkan jika memungkinkan, memastikan bahwa karya asli dapat dirujuk dengan benar dan pembaca dapat mengakses sumber asli jika diperlukan.",
  },
  {
    title: "Format Penulisan",
    description:
      "Teksnya diberi spasi tunggal; menggunakan font 12 poin; menggunakan huruf miring, bukan garis bawah (kecuali dengan alamat URL); dan semua ilustrasi, gambar, dan tabel ditempatkan di dalam teks pada titik yang tepat, bukan di bagian akhir.",
  },
  {
    title: "Mematuhi Gaya dan Bibliografi",
    description:
      "Untuk memastikan konsistensi dan keseragaman dalam penulisan, teks telah disusun dengan cermat mengikuti persyaratan gaya dan bibliografi yang diuraikan secara rinci dalam Pedoman Penulis, mencakup aspek-aspek seperti format kutipan, penggunaan font, spasi, margin, dan pengorganisasian daftar pustaka.",
  },
  {
    title: "Pernyataan Privasi",
    description:
      "Nama dan alamat email yang dimasukkan dalam situs jurnal ini akan digunakan secara eksklusif untuk tujuan jurnal ini dan tidak akan disediakan untuk tujuan lain apa pun atau kepada pihak lain mana pun.",
  },
];

function Task() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    initialInView: true,
  });

  return (
    <SectionColContainer style="px-2 md:px-16 items-center">
      <Heading
        type="custom"
        fontSize="text-2xl md:text-4xl"
        color="text-black"
        center="text-center"
      >
        Daftar Periksa Persiapan Pengajuan
      </Heading>
      <p className="text-slate-500 text-md md:text-lg max-w-[70rem] text-center mb-5 md:mb-24">
        Sebagai bagian dari proses penyerahan, penulis diminta untuk memeriksa
        kepatuhan kiriman mereka terhadap semua item berikut, dan kiriman dapat
        dikembalikan kepada penulis yang tidak mematuhi pedoman ini.
      </p>
      <AnimatePresence>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-row flex-wrap  gap-x-5 sm:gap-x-16 gap-y-14 md:gap-y-36 justify-center items-start"
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
