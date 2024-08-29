"use client";

import Gallery from "@/app/product/components/Gallery";
import InfoProduct from "@/app/product/components/infoProduct";
import BuyOptions from "@/app/product/components/BuyOptions";
import PaymentInfo from "@/app/product/components/PaymentInfo";
import MoreInfoProduct from "@/app/product/components/MoreInfoProduct";
import products from "@/api/products";

interface ProductPageProps {
  params: {
    id: number; // `id` viene como string de la URL
  };
}

export default function Product({ params }: ProductPageProps) {
  const { id } = params;

  // Convertir id a número y buscar el producto correspondiente
  const product = products.find((product) => product.id === Number(id));

  // Manejamos el caso en que el producto no se encuentra
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Asegúrate de descomentar y ajustar el componente Gallery */}
        <Gallery images={product.image} />
        
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <InfoProduct
            name={product.name}
            price={product.price}
            discount={product.discount}
            countdown={product.countdown}
          />
          <BuyOptions 
            colors={product.colors}
          />
          <PaymentInfo />
        </div>
      </section>

      <MoreInfoProduct />
    </>
  );
}