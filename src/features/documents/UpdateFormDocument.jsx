// import { useUpdateDocument } from "./useUpdateDocument";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// function UpdateFormDocument() {
//   const { updateDocument, isUpdating } = useUpdateDocument();
//   const {
//     handleSubmit,
//     setFieldValue,
//     handleChange,
//     handleBlur,
//     touched,
//     errors,
//     values,
//   } = useFormik({
//     initialValues: {
//       namaPenelitian: "",
//       suratPengantar: null,
//       suratRekomendasi: null,
//       fileProposal: null,
//       protokolPenelitian: null,
//       cv: null,
//       penjelasanPersetujuan: null,
//       kuesioner: null,
//     },
//     validationSchema: Yup.object().shape({
//       namaPenelitian: Yup.string().required("Nama Penelitian wajib diisi"),
//       suratPengantar: Yup.mixed().required(
//         "Surat Pengantar dari Lembaga/Institusi/Ketua Peneliti wajib diisi"
//       ),
//       suratRekomendasi: Yup.mixed().required(
//         "Surat Rekomendasi dari Kepala Unit/Kepala Pusat/Kepala Lembaga wajib diisi"
//       ),
//       fileProposal: Yup.mixed().required(
//         "File Proposal yang sudah disahkan oleh Institusi/Lembaga wajib diisi"
//       ),
//       protokolPenelitian: Yup.mixed().required(
//         "Protokol Penelitian wajib diisi"
//       ),
//       cv: Yup.mixed().required(
//         "Curriculum Vitae Peneliti Utama atau Ketua Pelaksana wajib diisi"
//       ),
//       penjelasanPersetujuan: Yup.mixed().required(
//         "Penjelasan untuk Persetujuan Subjek wajib diisi"
//       ),
//       kuesioner: Yup.mixed().required(
//         "Kuesioner/Pedoman Wawancara FGD wajib diisi"
//       ),
//     }),
//     onSubmit: (values, { resetForm, setSubmitting }) => {
//       try {
//         const formData = new FormData();
//         formData.append("researchName", values.namaPenelitian);

//         const fileFields = [
//           "suratPengantar",
//           "suratRekomendasi",
//           "fileProposal",
//           "protokolPenelitian",
//           "cv",
//           "penjelasanPersetujuan",
//           "kuesioner",
//         ];

//         fileFields.forEach((field) => {
//           if (values[field]) {
//             const fileName = `${field}-${values[field].name}`;
//             formData.append("documents", values[field], fileName);
//           }
//         });

//         createDocument(formData, { onSettled: () => resetForm() });
//       } catch (error) {
//         console.error("Error in onSubmit:", error);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });
//   return <div></div>;
// }

// export default UpdateFormDocument;
