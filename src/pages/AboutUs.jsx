import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import MainContainer from "../components/MainContainer";
import SectionColContainer from "../components/SectionColContainer";

function AboutUs() {
  return (
    <MainContainer>
      <Hero
        title="Tentang"
        desc="Semua tentang website K-etik Universitas YARSI."
        button="true"
        typeImage="homepage"
      />
      <SectionColContainer>
        <div className="px-20 flex flex-col gap-10">
          <Heading type="secondary">Apa itu web K-Etik?</Heading>
          <p className="text-2xl leading-relaxed text-gray-600">
            Website Kode Etik Universitas YARSI adalah platform resmi yang
            menyediakan informasi lengkap mengenai pedoman etika yang harus
            diikuti oleh seluruh civitas akademika universitas. Situs ini
            mencakup berbagai aspek etika yang berlaku di lingkungan kampus,
            termasuk integritas akademik, perilaku profesional, dan tanggung
            jawab sosial. Pengunjung dapat menemukan panduan tentang tata cara
            berinteraksi secara etis antara mahasiswa, dosen, dan staf, serta
            kebijakan terkait plagiarisme, privasi data, dan penggunaan
            fasilitas universitas, serta penelitian. Selain itu, situs ini juga
            menyediakan mekanisme pelaporan untuk pelanggaran etika, serta
            sumber daya untuk mendukung pemahaman dan penerapan kode etik dalam
            kegiatan akademik dan administrasi. Dengan menyediakan informasi
            yang jelas dan komprehensif, website ini bertujuan untuk menciptakan
            lingkungan kampus yang berintegritas, transparan, dan bertanggung
            jawab
          </p>
        </div>
      </SectionColContainer>
      <SectionColContainer>
        <div className="px-20 flex flex-col gap-10">
          <Heading type="secondary">Penyusun</Heading>
          <p className="text-2xl leading-relaxed text-gray-600">
            Komite Etik Penelitian Universitas YARSI disusun berdasarkan Surat
            Keputusan Rektor Universitas YARSI Nomor: 039/REK/KEP/VIII/2019
            tanggal 19 Agustus 2019 tentang Komite Etik Penelitian Universitas
            YARSI yang beranggotakan sebagai berikut:
          </p>
          <ol class="list-decimal px-7 text-2xl flex flex-col gap-10 text-gray-600">
            <li>
              Prof. dr. Hj. Qomariah RS., MS., PKK., AIFM., Sp.KKLP - Ketua
            </li>
            <li>Dr. dr. Wening Sari, M.Kes - Wakil Ketua</li>
            <li>
              Dr. Tripanjiasih Susmiarsih, S.Si., M.Biomed., PA - Sekretaris
            </li>
            <li>
              Prof. dr. Hj. Rika Yuliwulandari, M.Hlt.Sc., Ph.D., Sp.KKLP -
              Anggota
            </li>
            <li>Dr. dr. Wan Nedra, Sp.A - Anggota</li>
            <li>Dr. dr. Eko Purwanto, M.Kes., AIFM - Anggota</li>
            <li>Dr. Liza Evita, SH., M.Hum - Anggota</li>
            <li>Dr. Ir. Verni Y Ismail, MM., M.Si - Anggota</li>
            <li>
              Dr. Octaviani Indrasari Ranakusuma, Psi, BA (Hon), M.Si. - Anggota
            </li>
            <li>Karimulloh, MA., Ph.D - Anggota</li>
            <li>drg. Djuned Prasonto, Sp.KGA - Anggota</li>
            <li>drg. Audiawati Surachmin, Sp.PM - Anggota</li>
            <li>Dr. Juniarti, S.Si., M.Si - Anggota</li>
            <li>Dr. drs. M. Restu Syamsul Hadi, M.Kes - Anggota</li>
            <li>Intan Razari, S.Si - Sekretariat</li>
            <li>Riski Gemara, S.Kom - Sekretariat</li>
          </ol>
        </div>
      </SectionColContainer>
      <SectionColContainer>
        <div className="px-20 flex flex-col gap-24">
          <div className="text-center flex flex-col gap-5">
            <span className="text-color-secondary font-bold text-xl">
              Who Makes Website
            </span>
            <h1 className="font-bold text-5xl">Meet Our Team</h1>
          </div>
          <div className="flex items-center justify-evenly px-10">
            <div className="flex flex-col items-start justify-center gap-14">
              <img class="object-cover h-52 w-96 rounded-3xl" src="/ahay.jpg" />
              <span className="font-bold text-2xl">
                Hafidz Putra Herlyansyah
              </span>
              <span className="font-bold text-lg text-color-secondary">
                Full Stack Developer
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-10">
              <img class="object-cover h-52 w-96 rounded-3xl" src="/ahay.jpg" />
              <span className="font-bold text-2xl max-w-[22rem]">
                Paramaresthi Windriyani, S.Kom., M.Eng.
              </span>
              <span className="font-bold text-lg text-color-secondary">
                Mentor
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-14">
              <img class="object-cover h-52 w-96 rounded-3xl" src="/ahay.jpg" />
              <span className="font-bold text-2xl">Rio Griya Putra</span>
              <span className="font-bold text-lg text-color-secondary">
                UI/UX Designer
              </span>
            </div>
          </div>
        </div>
      </SectionColContainer>
      <Footer />
    </MainContainer>
  );
}

export default AboutUs;