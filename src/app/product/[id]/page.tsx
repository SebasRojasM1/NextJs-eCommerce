"use client";

import Category from "@/app/product/components/Category";
import Gallery from "@/app/product/components/Gallery";
import InfoProduct from "@/app/product/components/infoProduct";
import BuyOptions from "@/app/product/components/BuyOptions";
import PaymentInfo from "@/app/product/components/PaymentInfo";
import MoreInfoProduct from "@/app/product/components/MoreInfoProduct";
import products from "@/api/products";

interface ProductPageProps {
  params: {
    id: number; 
  };
}

export default function Product({ params }: ProductPageProps) {
  const { id } = params;

  // Convertir id a número y buscar el producto correspondiente
  const product = products.find((product) => product.id === Number(id));


  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <section className="flex justify-between p-[20px] flex-col">
        <Category name={product.name} category={product.category}/>

        <div className="flex">
          <Gallery images={product.image} />
          
        <div className="w-50% flex flex-col">
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
        </div>
        
      </section>

      <MoreInfoProduct />
    </>
  );
}