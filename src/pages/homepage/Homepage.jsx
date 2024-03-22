import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import MainContainer from "../../components/MainContainer";
import AboutUs from "./AboutUs";
import BriefInformation from "./BriefInformation";
import Task from "./Task";

function Homepage() {
  return (
    <MainContainer>
      <Hero
        title="Komite Etik"
        title2="Universitas Yarsi"
        typeImage="homepage"
      />
      <BriefInformation />
      <AboutUs />
      <Task />
      <Footer />
    </MainContainer>
  );
}

export default Homepage;
