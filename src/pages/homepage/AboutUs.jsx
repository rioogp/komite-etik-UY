import Heading from "../../components/Heading";
import Image from "../../components/Image";

function AboutUs() {
  return (
    <section className="relative">
      <div className="flex w-auto flex-col gap-8 justify-center items-center xl:gap-0 xl:justify-start xl:items-start xl:flex-row border border-slate-200 rounded-3xl mx-8 md:mx-24 px-5 sm:px-14 py-8 sm:py-16 md:py-24 bg-color-primary">
        <div className="basis-1/2 animate-slidein">
          <Heading
            type="custom"
            fontSize="text-4xl sm:text-5xl md:text-6xl"
            color="text-white"
          >
            Tentang Kita
          </Heading>
        </div>
        <p className="basis-1/2 text-white text-md sm:text-xl text-center md:text-start md:text-3xl md:leading-[3rem] animate-slidein">
          Website resmi Kode Etik Universitas YARSI didedikasikan untuk
          menyediakan informasi tentang kode etik yang dijunjung tinggi di
          lingkungan kampus. Kami memastikan bahwa mahasiswa, dosen, dan seluruh
          anggota komunitas universitas kami mengikuti prinsip-prinsip
          integritas akademik, kehormatan, dan tanggung jawab, serta menjunjung
          tinggi kerjasama, keadilan, dan keberagaman. Kami berkomitmen untuk
          menciptakan lingkungan belajar yang mendukung kesejahteraan dan
          kemajuan akademik bagi semua pihak yang terlibat.
        </p>
      </div>
      <Image src="/Motif.png" type="absolute" />
    </section>
  );
}

export default AboutUs;
