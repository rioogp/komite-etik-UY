import { useOutletContext } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Settings() {
  const [setTitle] = useOutletContext();

  setTitle("Pengaturan");
  usePageTitle("Pengaturan | Komite Etik");

  return <></>;
}

export default Settings;
