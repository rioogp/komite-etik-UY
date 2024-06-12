import Hero from "../components/Hero";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import ReviewsInput from "../features/reviews/ReviewsInput";
import ReviewsDisplay from "../features/reviews/ReviewsDisplay";
import usePageTitle from "../hooks/usePageTitle";

function Reviews() {
  usePageTitle("Ulasan | Komite Etik");

  return (
    <MainContainer>
      <Hero
        title="Ulasan"
        typeImage="homepage"
        button="true"
        desc="Kami ingin mendengar dari Anda! Berikan ulasan Anda tentang pengalaman Anda menggunakan website kami. Kami sangat menghargai setiap komentar yang Anda berikan dan akan menggunakan informasi tersebut untuk terus meningkatkan layanan kami."
      />
      <ReviewsInput />
      <ReviewsDisplay />
      <Footer />
    </MainContainer>
  );
}

export default Reviews;
