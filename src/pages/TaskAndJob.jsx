import { Divider } from "@mui/material";
import Heading from "../components/Heading";
import MainContainer from "../components/MainContainer";
import Hero from "../components/Hero";
import SectionColContainer from "../components/SectionColContainer";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";

function TaskAndJob() {
  usePageTitle("Tugas & Fungsi | Komite Etik");

  return (
    <MainContainer>
      <Hero
        title="Tugas dan Fungsi"
        title2="Universitas Yarsi"
        desc="Semua tentang Tugas dan Fungsi Komite Etik Universitas YARSI"
        typeImage="homepage"
      />
      <SectionColContainer style="px-8 md:px-16">
        <div className="flex flex-col gap-2">
          <Heading type="custom" fontSize="text-2xl md:text-3xl">
            Tugas dan Tanggung Jawab Komite Etik
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Lihat uraian tugas dan tanggung jawab Komite Etik dibawah ini
          </span>
        </div>
        <Divider />
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Melakukan Penilaian Proposal Penelitian
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Review protokol penelitian terutama ditujukan kepada masalah etik
            bukan metodologis, meskipun demikian Komite Etik boleh memberikan
            komentar atau catatan tentang   metodologis. Oleh karena itu dalam
            pengajuan Kelayakan Etik Penelitian kajian  metodologis ditegaskan
            melalui rekomendasi dari panitia ilmiah suatu Lembaga/Unit
            Penelitian yang menyatakan bahwa Proposal telah direview oleh suatu
            Tim Reviewer Proposal Penelitian. Apabila pemohon/lembaga tidak
            memiliki Lembaga/Unit Penelitian, maka kajian metodologis akan
            sekaligus  dilakukan oleh Komite Etik Penelitian Universitas YARSI.{" "}
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Membahas Hasil Review{" "}
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Pembahasan hasil review lebih ditekankan kepada etik penelitian yang
            diajukan layak (diterima) atau tidak layak (ditolak) untuk
            dilaksanakan. Penelitian yang mengikutsertakan relawan manusia
            sebagai subjek penelitian  dapat secara etis dibenarkan karena
            terdapat kemungkinan ditemukan cara-cara baru yang menguntungkan
            kesehatan masyarakat.
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Meneliti Informed Consent{" "}
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Pada semua subjek penelitian kesehatan yang mengikutsertakan manusia
            sebagai subjek penelitian, peneliti harus memperoleh Persetujuan
            Sesudah Penjelasan (PSP)/Informed Consent dari calon subjek. Jika
            subjek peneliti tidak mampu memberikan PSP maka persetujuan harus
            diperoleh dari seorang yang menurut hukum yang berlaku berhak
            mewakilinya. Tidak diperlukan PSP (waiver) hanya dibenarkan ada
            suatu keadaan khusus, dan merupakan suatu perkecualian yang harus
            disetujui oleh KPK. Komite EtikPenelitian akan meneliti apakah
            penelitian secara etik tidak mengganggu subjek secara waktu dan
            finansial. Bila dalam penelitian dilakukan intervensi, maka secara
            etik intervensi tersebut tidak membebani responden/subjek. Selain
            itu pada penelitian dengan intervensi tidak diperkenankan
            menggunakan langsung pada subjek manusia sebelum ada kajian
            penelitian pada hewan percobaan.{" "}
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Memberikan Kelayakan Etik Penelitian{" "}
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Pembahasan hasil review lebih ditekankan kepada etik penelitian yang
            diajukan layak (diterima) atau tidak layak (ditolak) untuk
            dilaksanakan. Penelitian yang mengikutsertakSurat Kelayakan Etik
            Penelitian akan dikeluarkan oleh Komite Etik Penelitian Universitas
            YARSI dan ditandatangani oleh Ketua Komite Etik Penelitian
            Universitas YARSI.an relawan manusia sebagai subjek penelitian
             dapat secara etis dibenarkan karena terdapat kemungkinan ditemukan
            cara-cara baru yang menguntungkan kesehatan masyarakat.
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Mengevaluasi (Memonitor) Pelaksanaan Penelitian yang Terkait Dengan
            Etik{" "}
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Kegiatan ini memastikan bahwa penelitian dijalankan sesuai
            kaidah-kaidah  etik yang telah  ditetapkan. Monitoring/evaluasi
            kegiatan akan dilakukan oleh Komite minimal satu kali dalam satu
            penelitian. Dalam kondisi tertentu yang membahayakan subjek, Komite
            Etik Penelitian Universitas YARSI dapat memberikan rekomendasi untuk
            penghentian kegiatan penelitian
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Heading type="custom" fontSize="text-xl md:text-2xl">
            Menghadiri Rapat-Rapat Komite Etik{" "}
          </Heading>
          <span className="text-sm md:text-base text-gray-500">
            Rapat-rapat Komite Etik Penelitian Lembaga Penelitian Universitas
            YARSI akan dilakukan sesuai dengan kebutuhan, namun akan berlaku
            minimal tiap tiga bulan sekali.
          </span>
        </div>
      </SectionColContainer>
      <Footer />
    </MainContainer>
  );
}

export default TaskAndJob;
