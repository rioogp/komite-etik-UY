import { useOutletContext } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import usePageTitle from "../hooks/usePageTitle";

function Settings() {
  const [setTitle] = useOutletContext();

  setTitle("Pengaturan");
  usePageTitle("Pengaturan | Komite Etik");

  return (
    <>
      <ModalComponent />
    </>
  );
}

export default Settings;
