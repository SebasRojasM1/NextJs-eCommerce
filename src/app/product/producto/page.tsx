import Gallery from "@/app/product/components/Gallery";
import InfoProduct from "@/app/product/components/infoProduct";
import BuyOptions from "@/app/product/components/BuyOptions";
import PaymentInfo from "@/app/product/components/PaymentInfo";
import MoreInfoProduct from "@/app/product/components/MoreInfoProduct";

export default function Product() {
  return (
    <>
      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Gallery />
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <InfoProduct />
          <BuyOptions />
          <PaymentInfo />
        </div>
      </section>
      <MoreInfoProduct />
    </>
  );
}