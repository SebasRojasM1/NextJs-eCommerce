import Header from "@/app/components/Header"
import SeasonCollection from "@/app/components/SeasonCollection"
import DiscountSection from "@/app/components/DiscountSection"
import LocationMap from "@/app/components/LocationMap"
import AdditionalInformation from "@/app/components/AdditionalInfo"
import BrandLogos from "@/app/components/BrandLogos"
import Footer from "@/app/components/Footer"
import ProductPage from "@/app/components/ProductPage"

export default function Home() {
  return (
    <>{/* Aqui se pondrán los componentes que harán parte del HOME, y Layout hace que sea el Home de esta pagina */}
      <Header />
      <SeasonCollection />
      
      <DiscountSection />
      <AdditionalInformation />
      <LocationMap />
      <BrandLogos />
      <Footer />
      <ProductPage />
    </>
  );
}
