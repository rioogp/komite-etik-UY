import { Divider } from "@mui/material";
import Heading from "../components/Heading";
import Image from "../components/Image";
import LetterFormTable from "../features/dashboard/LetterFormTable";
import usePageTitle from "../hooks/usePageTitle";

function Home() {
  usePageTitle("Beranda Dashboard | Komite Etik");

  return (
    <section className="flex flex-col gap-12 mb-10">
      <div className="flex flex-col gap-2">
        <Heading type="custom" fontSize="text-xl md:text-2xl">
          Form Template Surat
        </Heading>
        <span className="text-sm md:text-base text-gray-500">Sumber Daya</span>
      </div>
      <Divider />
      <LetterFormTable />

      <div className="flex flex-col gap-7 text-center items-center justify-center">
        <Heading type="custom" fontSize="text-2xl md:text-3xl">
          Tata Kerja Komite Etik dan Prosedur Pengajuan Kelayakakan Etik
          Penelitian Universitas YARSI{" "}
        </Heading>
        <span className="text-sm md:text-base text-gray-500">
          Lihat uraian Tata Kerja Komite Etik dan Prosedur Pengajuan Kelayakan
          Etik Penelitian dibawah ini
        </span>
      </div>
      <div className="flex w-full justify-center gap-20">
        <Image type="home" src="/Tata_Kerja_1.png" />
      </div>
    </section>
  );
}

export default Home;
