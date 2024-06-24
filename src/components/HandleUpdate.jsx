import MySwal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CiEdit } from "react-icons/ci";

const Swal = withReactContent(MySwal);

function HandleUpdate(title, desc, confirmText, updateData) {
  Swal.fire({
    html: (
      <div className="text-start">
        <div className="mb-4 text-center flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-600">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600">
            <CiEdit size={20} />
          </div>
        </div>
        <h2 className="text-base md:text-xl font-semibold mb-2">
          {title ? title : "Ubah"}
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          {desc ? desc : "Apakah anda yakin untuk mengubah data ini?"}
        </p>
      </div>
    ),
    showCancelButton: true,
    confirmButtonText: confirmText ? confirmText : "Ubah",
    cancelButtonText: "Batal",
    customClass: {
      container: "swal2-container",
      popup: "rounded-lg shadow-lg w-[25rem]",
      actions: "flex flex-row-reverse w-full px-5 gap-3",
      confirmButton:
        "flex-1 bg-teal-600 h-10 text-xs md:text-sm hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md",
      cancelButton:
        "flex-1 bg-gray-200 h-10 hover:bg-gray-300 text-xs md:text-sm text-gray-800 font-bold py-2 px-4 rounded-md",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      updateData();
    }
  });
}

export default HandleUpdate;
