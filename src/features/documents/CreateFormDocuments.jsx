import { Button, TextField, ThemeProvider } from "@mui/material";
import * as Yup from "yup";

import Form from "../../components/Form";
import FormRowInput from "../../components/FormRowInput";
import { theme } from "../../utils/theme";
import { MuiFileInput } from "mui-file-input";
import { useFormik } from "formik";
import { IoMdClose } from "react-icons/io";
import { useCreateDocument } from "./useCreateDocument";
import { uploadDocument } from "../../services/documents";

function CreateFormDocuments() {
  const { createDocument, isCreating } = useCreateDocument();
  const {
    handleSubmit,
    setFieldValue,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues: {
      namaPenelitian: "",
      suratPengantar: null,
      suratRekomendasi: null,
      fileProposal: null,
      protokolPenelitian: null,
      cv: null,
      penjelasanPersetujuan: null,
      kuesioner: null,
    },
    validationSchema: Yup.object().shape({
      namaPenelitian: Yup.string().required("Nama Penelitian wajib diisi"),
      suratPengantar: Yup.mixed().required(
        "Surat Pengantar dari Lembaga/Institusi/Ketua Peneliti wajib diisi"
      ),
      suratRekomendasi: Yup.mixed().required(
        "Surat Rekomendasi dari Kepala Unit/Kepala Pusat/Kepala Lembaga wajib diisi"
      ),
      fileProposal: Yup.mixed().required(
        "File Proposal yang sudah disahkan oleh Institusi/Lembaga wajib diisi"
      ),
      protokolPenelitian: Yup.mixed().required(
        "Protokol Penelitian wajib diisi"
      ),
      cv: Yup.mixed().required(
        "Curriculum Vitae Peneliti Utama atau Ketua Pelaksana wajib diisi"
      ),
      penjelasanPersetujuan: Yup.mixed().required(
        "Penjelasan untuk Persetujuan Subjek wajib diisi"
      ),
      kuesioner: Yup.mixed().required(
        "Kuesioner/Pedoman Wawancara FGD wajib diisi"
      ),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("researchName", values.namaPenelitian);

        const fileFields = [
          "suratPengantar",
          "suratRekomendasi",
          "fileProposal",
          "protokolPenelitian",
          "cv",
          "penjelasanPersetujuan",
          "kuesioner",
        ];

        fileFields.forEach((field) => {
          if (values[field]) {
            formData.append("documents", values[field]);
          }
        });

        createDocument(formData, { onSettled: () => resetForm() });
      } catch (error) {
        console.error("Error in onSubmit:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <FormRowInput>
        <span className="font-medium text-lg">Nama Penelitian</span>
        <TextField
          id="namaPenelitian"
          variant="outlined"
          placeholder="Masukkan nama penelitian"
          value={values.namaPenelitian}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.namaPenelitian && Boolean(errors.namaPenelitian)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.namaPenelitian && errors.namaPenelitian}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          Surat Pengantar dari Lembaga/Institusi/Ketua Peneliti
        </span>

        <MuiFileInput
          id="suratPengantar"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.suratPengantar}
          placeholder="Masukkan Surat Pengantar"
          onChange={(value) => setFieldValue("suratPengantar", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={touched.suratPengantar && Boolean(errors.suratPengantar)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.suratPengantar && errors.suratPengantar}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          Surat Rekomendasi dari Kepala Unit/Kepala Pusat/Kepala Lembaga
        </span>

        <MuiFileInput
          id="suratRekomendasi"
          value={values.suratRekomendasi}
          onChange={(value) => setFieldValue("suratRekomendasi", value)}
          placeholder="Masukkan Surat Rekomendasi"
          inputProps={{ accept: ".pdf" }}
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          onBlur={handleBlur}
          error={touched.suratRekomendasi && Boolean(errors.suratRekomendasi)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.suratRekomendasi && errors.suratRekomendasi}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          File Proposal yang sudah disahkan oleh Institusi/Lembaga
        </span>

        <MuiFileInput
          id="fileProposal"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.fileProposal}
          placeholder="Masukkan File Proposal"
          onChange={(value) => setFieldValue("fileProposal", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={touched.fileProposal && Boolean(errors.fileProposal)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.fileProposal && errors.fileProposal}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">Protokol Penelitian</span>

        <MuiFileInput
          id="protokolPenelitian"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.protokolPenelitian}
          placeholder="Masukkan File Protokol Penelitian"
          onChange={(value) => setFieldValue("protokolPenelitian", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={
            touched.protokolPenelitian && Boolean(errors.protokolPenelitian)
          }
        />
        <span className="text-red-500 text-md font-medium">
          {touched.protokolPenelitian && errors.protokolPenelitian}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          Curriculum Vitae Peneliti Utama atau Ketua Pelaksana
        </span>

        <MuiFileInput
          id="cv"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.cv}
          placeholder="Masukkan CV"
          onChange={(value) => setFieldValue("cv", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={touched.cv && Boolean(errors.cv)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.cv && errors.cv}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          Penjelasan untuk Persetujuan Subjek
        </span>

        <MuiFileInput
          id="penjelasanPersetujuan"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.penjelasanPersetujuan}
          placeholder="Masukkan File Penjelasan untuk Persetujuan Subjek"
          onChange={(value) => setFieldValue("penjelasanPersetujuan", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={
            touched.penjelasanPersetujuan &&
            Boolean(errors.penjelasanPersetujuan)
          }
        />
        <span className="text-red-500 text-md font-medium">
          {touched.penjelasanPersetujuan && errors.penjelasanPersetujuan}
        </span>
      </FormRowInput>

      <FormRowInput>
        <span className="font-medium text-lg">
          Kuesioner/Pedoman Wawancara FGD
        </span>

        <MuiFileInput
          id="kuesioner"
          clearIconButtonProps={{
            title: "Remove",
            children: <IoMdClose size={30} />,
          }}
          value={values.kuesioner}
          placeholder="Masukkan Kuesioner/Pedoman Wawancara"
          onChange={(value) => setFieldValue("kuesioner", value)}
          inputProps={{ accept: ".pdf" }}
          onBlur={handleBlur}
          error={touched.kuesioner && Boolean(errors.kuesioner)}
        />
        <span className="text-red-500 text-md font-medium">
          {touched.kuesioner && errors.kuesioner}
        </span>
      </FormRowInput>

      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="success"
          className="w-44 h-12"
          disabled={isCreating}
        >
          {isCreating ? "Loading..." : "Ajukan"}
        </Button>
      </ThemeProvider>
    </Form>
  );
}

export default CreateFormDocuments;
