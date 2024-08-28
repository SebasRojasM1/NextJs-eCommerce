import Header from "@/app/components/Header"
import Slider from "@/app/components/Slider"
import SeasonCollection from "@/app/components/SeasonCollection"
import ProductList from "@/app/components/ProductList"
import DiscountSection from "@/app/components/DiscountSection"
import LocationMap from "@/app/components/LocationMap"
import AdditionalInformation from "@/app/components/AdditionalInfo"
import BrandLogos from "@/app/components/BrandLogos"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      
      <main>
        <Slider />
        <SeasonCollection />
        <ProductList />
        <DiscountSection />
        <AdditionalInformation />
        <LocationMap />
        <BrandLogos />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}
