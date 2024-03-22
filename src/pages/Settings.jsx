import ModalComponent from "../components/ModalComponent";
import usePageTitle from "../hooks/usePageTitle";

function Settings() {
  usePageTitle("Pengaturan | Komite Etik");

  return (
    <>
      {" "}
      <ModalComponent />
    </>
  );
}

export default Settings;
