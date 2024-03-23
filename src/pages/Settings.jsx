import { useOutletContext } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import usePageTitle from "../hooks/usePageTitle";
import { Button } from "@mui/material";

function Settings() {
  const [setTitle] = useOutletContext();

  setTitle("Pengaturan");
  usePageTitle("Pengaturan | Komite Etik");

  return (
    <>
      <ModalComponent>
        <ModalComponent.OpenButton>
          <Button>Open Modal</Button>
        </ModalComponent.OpenButton>
        <ModalComponent.ModalWindow />
      </ModalComponent>
    </>
  );
}

export default Settings;
