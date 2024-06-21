export const steps = [
  {
    title: "Sedang Diproses",
    icon: (
      <svg
        className="w-[32px] h-[32px] text-gray-800 dark:text-white bg-orange-600 rounded-full p-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
        />
      </svg>
    ),
    description:
      "Proposal Pengajuan telah berhasil terkirim, proposal menunggu untuk direview oleh reviewer.",
  },
  {
    title: "Sedang Direview",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="ms-[1px] w-[32px] h-[32px] bi bi-search bg-blue-500 rounded-full p-1.5 relative"
      >
        <path
          fill="white"
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          className="absolute top-1/2 left-1/2 transform -translate-x-[-4px] -translate-y-[-2.5px]"
        />
      </svg>
    ),
    description:
      "Proposal Pengajuan sedang direview oleh reviewer, menunggu untuk status layak atau tidak.",
  },
  {
    title: "Tidak Layak",
    icon: (
      <svg
        className="ms-[-4px] w-[34px] h-[34px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        width="120"
        height="120"
        viewBox="0 3 20 20"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    description:
      "Pengajuan proposal ditolak, silahkan cermati kesalahannya dan ajukan proposal kembali.",
  },
  {
    title: "Perbaikan",
    icon: (
      <svg
        className="ms-[1.2px] w-[30px] h-[30px] text-gray-800 dark:text-white bg-gray-400 rounded-full p-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
        />
        <path
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
    ),
    description:
      "Pengajuan proposal butuh diperbaiki, mohon perbaiki beberapa dokumen sesuai dengan masukan yang diberikan.",
  },
  {
    title: "Sedang Ditandatangani",
    icon: (
      <svg
        className="w-[32px] h-[32px] text-gray-800 dark:text-white bg-yellow-500 rounded-full p-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
        />
      </svg>
    ),
    description:
      "Proposal Pengajuan sedang ditandatangani oleh ketua, mohon menunggu untuk mendapatkan dokumen terbaru dari ketua.",
  },
  {
    title: "Layak",
    icon: (
      <svg
        className="ms-[-2px] w-[36px] h-[36px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          fill="#00D090"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          fill="white"
          d="M15.707 10.707a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description:
      "Proposal Pengajuan diterima, lanjutkan penelitian anda dan sukses selalu!.",
  },
];
