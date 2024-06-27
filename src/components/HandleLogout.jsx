import MySwal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiLogOut } from "react-icons/fi";

const Swal = withReactContent(MySwal);

function HandleLogout(logout) {
  Swal.fire({
    html: (
      <div className="text-start">
        <div className="mb-4 text-center flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-500">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500">
            <FiLogOut size={20} />
          </div>
        </div>
        <h2 className="text-base md:text-xl font-semibold mb-2">Keluar</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          Anda yakin untuk keluar? Pastikan Anda kembali lagi.
        </p>
      </div>
    ),
    showCancelButton: true,
    confirmButtonText: "Keluar",
    cancelButtonText: "Batal",
    customClass: {
      popup: "rounded-lg shadow-lg w-[25rem]",
      actions: "flex flex-row-reverse w-full px-5 gap-3",
      confirmButton:
        "flex-1 bg-teal-600 h-10 text-xs md:text-sm hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md active:bg-teal-900",
      cancelButton:
        "flex-1 bg-gray-200 h-10 hover:bg-gray-300 text-xs md:text-sm text-gray-800 font-bold py-2 px-4 rounded-md active:bg-gray-5 00",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      logout();
    }
  });
}

export default HandleLogout;
