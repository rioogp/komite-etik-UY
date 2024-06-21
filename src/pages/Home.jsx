import { Divider } from "@mui/material";
import Heading from "../components/Heading";
import Image from "../components/Image";
import LetterFormTable from "../features/dashboard/LetterFormTable";
import usePageTitle from "../hooks/usePageTitle";
import { FaCheck } from "react-icons/fa";
import Item from "../components/Item";

const lists = [
  {
    title: "Surat Pengantar dari Lembaga/Institusi/Ketua Peneliti",
  },
  {
    title: "Surat Rekomendasi dari Kepala Unit/Kepala Pusat/Kepala Lembaga",
  },
  {
    title: "Proposal yang sudah disahkan oleh Institusi/Lembaga",
  },
  {
    title: "Protokol Penelitian ",
  },
  {
    title: "Curriculum Vitae Peneliti Utama atau Ketua Pelaksana",
  },
  {
    title: "Form Surat Pengajuan Kelayakan Etik",
  },
];

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

      <div className="flex flex-col gap-2">
        <Heading type="custom" fontSize="text-xl md:text-2xl">
          Berkas Wajib Pengajuan Penelitian
        </Heading>
        <span className="text-sm md:text-base text-gray-500">
          Berkas wajib yang harus tersedia pada saat pengajuan, lihat dibawah
          ini.
        </span>
      </div>
      <Divider />
      <div className="flex flex-row flex-wrap gap-x-1 gap-y-14 md:gap-y-36 justify-center items-start mb-10">
        {lists.map((task, index) => (
          <Item key={index} number={<FaCheck />} title={task.title} />
        ))}
      </div>

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
