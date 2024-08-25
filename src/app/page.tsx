import Header from "@/app/components/Header"
import SeasonCollection from "@/app/components/SeasonCollection"
// import LocationMap from "@/app/components/LocationMap"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <>{/* Aqui se pondrán los componentes que harán parte del HOME, y Layout hace que sea el Home de esta pagina */}
      <Header></Header>
      <SeasonCollection></SeasonCollection>
      {/* <LocationMap></LocationMap> */}
      <Footer />
    </>
  );
}
