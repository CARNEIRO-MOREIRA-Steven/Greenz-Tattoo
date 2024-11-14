import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import IntroTatoueuse from "./components/Tatoueuse/IntroTatoueuse";
import ContactAccueil from "./components/Contact/ContactAccueil";


export default function Home() {
  return (
<section>
    <Header />
    <Banner />
    <IntroTatoueuse />
    <ContactAccueil />
</section>
  );
}
