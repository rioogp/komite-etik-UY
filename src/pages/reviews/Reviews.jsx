import { TextField } from "@mui/material";
import Hero from "../../components/Hero";
import MainContainer from "../../components/MainContainer";
import ReviewsInput from "./ReviewsInput";
import ReviewsDisplay from "./ReviewsDisplay";
import Footer from "../../components/Footer";

function Reviews() {
  return (
    <MainContainer>
      <Hero
        title="Ulasan"
        typeImage="homepage"
        page="ulasan"
        desc="Kami ingin mendengar dari Anda! Berikan ulasan Anda tentang pengalaman Anda menggunakan website kami. Kami sangat menghargai setiap komentar yang Anda berikan dan akan menggunakan informasi tersebut untuk terus meningkatkan layanan kami."
      />
      <ReviewsInput />
      <ReviewsDisplay />
      <Footer />
    </MainContainer>
  );
}

export default Reviews;
