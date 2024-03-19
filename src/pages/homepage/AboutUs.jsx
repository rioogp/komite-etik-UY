import Heading from "../../components/Heading";
import Image from "../../components/Image";

function AboutUs() {
  return (
    <section className="relative">
      <div className="flex w-auto flex-row border border-slate-200 rounded-3xl mx-24  px-14 py-24 bg-color-primary">
        <div className="basis-1/2 animate-slidein">
          <Heading type="custom" fontSize="text-6xl" color="text-white">
            Tentang Kita
          </Heading>
        </div>
        <p className="basis-1/2 text-white text-3xl leading-[3rem] animate-slidein">
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
