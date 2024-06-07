import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import MainContainer from "../../components/MainContainer";
import GeneralQuestions from "./GeneralQuestions";
import Rules from "./Rules";

function RulesAndQuestions() {
  return (
    <MainContainer>
      <Hero
        title="Peraturan & Pertanyaan"
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
