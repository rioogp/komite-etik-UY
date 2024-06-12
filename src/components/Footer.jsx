import { Divider } from "@mui/material";
import Heading from "./Heading";
import LinkRoute from "./LinkRoute";

function Footer() {
  return (
    <footer className="bg-slate-100 flex flex-col gap-5 justify-center items-center pb-4">
      <div className="flex flex-col py-28 pt-12 sm:pt-16 px-6 pb-8 md:px-36 gap-16 w-full">
        <div className="flex flex-col gap-4">
          <Heading
            Heading
            type="custom"
            fontSize="text-xl md:text-3xl"
            color="text-slate-800"
          >
            Komite Etik
          </Heading>
          <Heading
            Heading
            type="custom"
            fontSize="text-xl md:text-3xl"
            color="text-slate-800"
          >
            Universitas Yarsi
          </Heading>
        </div>
        <Divider />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col basis-2/4">
            <Heading
              type="custom"
              fontSize="text-lg md:text-xl"
              color="text-slate-800"
            >
              Catatan
            </Heading>
            <Heading
              type="custom"
              fontSize="text-lg md:text-xl"
              color="text-slate-800"
            >
              Etik:
            </Heading>
            <p className="max-w-[25rem] text-sm md:text-md text-slate-700">
              Panduan Perilaku dan Aturan Berlaku untuk Seluruh Anggota
              Komunitas Universitas YARSI tanpa memandang jabatan dan Gelar.
            </p>
          </div>
          <div className="flex flex-col gap-9">
            <Heading
              type="custom"
              fontSize="text-lg md:text-xl"
              color="text-slate-800"
            >
              Menu
            </Heading>
            <div className="flex flex-col gap-6">
              <LinkRoute type="footer" to="/peraturan-dan-pertanyaan">
                Pertanyaan & Peraturan
              </LinkRoute>
              <LinkRoute type="footer" to="/ulasan">
                Ulasan
              </LinkRoute>
              <LinkRoute type="footer" to="/tentang">
                Tentang
              </LinkRoute>
              <LinkRoute type="footer" to="/tugas-dan-fungsi">
                Tugas & Fungsi
              </LinkRoute>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <Heading
              type="custom"
              fontSize="text-lg md:text-xl"
              color="text-slate-800"
            >
              Resources
            </Heading>
            <div className="flex flex-col gap-6">
              <LinkRoute type="footer" to="/homepage">
                Dashboard
              </LinkRoute>
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs md:text-sm">
        Copyright © <span className="text-color-primary">2024</span>{" "}
        <b>K-Etik</b> | Tim Ashborn
      </span>
    </footer>
  );
}

export default Footer;
