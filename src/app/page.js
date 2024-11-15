import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import IntroTatoueuse from "./components/Tatoueuse/IntroTatoueuse";
import IntroSalon from "./components/Tatoueuse/IntroSalon";
import ContactAccueil from "./components/Contact/ContactAccueil";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
<section>
    <Header />
    <Banner />
    <IntroTatoueuse />
    <IntroSalon />
    <ContactAccueil />
    <Footer />
</section>
  );
}
