import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import MainContainer from "../../components/MainContainer";
import usePageTitle from "../../hooks/usePageTitle";
import GeneralQuestions from "./GeneralQuestions";

function RulesAndQuestions() {
  usePageTitle("Pertanyaan Umum | Komite Etik");

  return (
    <MainContainer>
      <Hero
        title="Pertanyaan Umum"
        title2="Komite Etik Universitas Yarsi"
        typeImage="peraturan"
      />
      {/* <Rules /> */}
      <GeneralQuestions />
      <Footer />
    </MainContainer>
  );
}

export default RulesAndQuestions;
