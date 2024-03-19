import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Card from "./CardItem";
import GeneralQuestions from "./GeneralQuestions";
import Rules from "./Rules";

function RulesAndQuestions() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <Hero
        title="Peraturan & Pertanyaan"
        title2="Komite Etik Universitas Yarsi"
        typeImage="peraturan"
      />
      <Rules />
      <GeneralQuestions />
      <Footer />
    </main>
  );
}

export default RulesAndQuestions;
