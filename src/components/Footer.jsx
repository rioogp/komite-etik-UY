import { Divider } from "@mui/material";
import Heading from "./Heading";
import LinkRoute from "./LinkRoute";

function Footer() {
  return (
    <footer className="bg-slate-100 flex flex-col py-32 px-52 gap-28">
      <div className="flex flex-col gap-4">
        <Heading
          Heading
          type="custom"
          fontSize="text-5xl"
          color="text-slate-800"
        >
          Komite Etik
        </Heading>
        <Heading
          Heading
          type="custom"
          fontSize="text-5xl"
          color="text-slate-800"
        >
          Universitas Yarsi
        </Heading>
      </div>
      <Divider />
      <div className="flex gap-10">
        <div className="flex flex-col basis-2/4">
          <Heading type="custom" fontSize="text-2xl" color="text-slate-800">
            Catatan
          </Heading>
          <Heading type="custom" fontSize="text-2xl" color="text-slate-800">
            Etik:
          </Heading>
          <p className="max-w-[25rem] text-slate-700">
            Panduan Perilaku dan Aturan Berlaku untuk Seluruh Anggota Komunitas
            Universitas YARSI tanpa memandang jabatan dan Gelar.
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <Heading type="custom" fontSize="text-2xl" color="text-slate-800">
            Menu
          </Heading>
          <div className="flex flex-col gap-6">
            <LinkRoute type="footer" to="/peraturan-dan-pertanyaan">
              Pertanyaan & Peraturan
            </LinkRoute>
            <LinkRoute type="footer" to="/peraturan-dan-pertanyaan">
              Contact
            </LinkRoute>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <Heading type="custom" fontSize="text-2xl" color="text-slate-800">
            Resources
          </Heading>
          <div className="flex flex-col gap-6">
            <LinkRoute type="footer" to="/homepage">
              Dashboard
            </LinkRoute>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
