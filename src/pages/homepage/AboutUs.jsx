import Heading from "../../components/Heading";
import Image from "../../components/Image";

function AboutUs() {
  return (
    <section className="relative">
      <div className="flex w-auto flex-col gap-8 justify-center items-center xl:gap-0 xl:justify-start xl:items-start xl:flex-row border border-slate-200 rounded-3xl mx-8 md:mx-12 px-5 sm:px-10 py-8 sm:py-12 md:py-16 xl:pb-40 bg-color-primary">
        <div className="basis-1/2 animate-slidein">
          <Heading
            type="custom"
            fontSize="text-2xl sm:text-3xl md:text-5xl"
            color="text-white"
          >
            Tentang Kita
          </Heading>
        </div>
        <p className="basis-1/2 text-white text-md text-center md:text-start md:text-lg md:leading-[2.5rem] animate-slidein">
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
