import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Principal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>
      
<footer>
        <Footer />
      </footer>
    </>
  );
}