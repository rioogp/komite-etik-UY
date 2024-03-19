import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import AboutUs from "./AboutUs";
import BriefInformation from "./BriefInformation";
import Task from "./Task";

function Homepage() {
  return (
    <main className="flex flex-col gap-36 overflow-hidden">
      <Hero
        title="Komite Etik"
        title2="Universitas Yarsi"
        typeImage="homepage"
      />
      <BriefInformation />
      <AboutUs />
      <Task />
      <Footer />
    </main>
  );
}

export default Homepage;
