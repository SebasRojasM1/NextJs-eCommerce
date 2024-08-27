import React, { useState } from 'react';
import '@/assets/styles/Home/seasonCollections.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const products = {
        bestSeller: [
          { id: 1, name: "Ribbed Tank Top", price: "$16.95", image: "/path/to/image1.jpg", colors: ["#000", "#FFF", "#F00"] },
          { id: 2, name: "Ribbed modal T-shirt", price: "From $18.95", image: "/path/to/image2.jpg", discount: "33%", countdown: "1d 15h 51m 37s", colors: ["#FFF", "#F0F", "#0F0"] },
          { id: 3, name: "Oversized Printed T-shirt", price: "$10.00", image: "/path/to/image3.jpg", colors: ["#FFF", "#000"] },
          // ...otros productos
        ],
        newArrivals: [
          { id: 4, name: "V-neck linen T-shirt", price: "$14.95", image: "/path/to/image4.jpg", colors: ["#F0F", "#000", "#FFF"] },
          { id: 5, name: "Loose Fit Sweatshirt", price: "$30.00", image: "/path/to/image5.jpg", colors: ["#00F", "#FFF", "#F00"] },
          // ...otros productos
        ],
        onSale: [
          { id: 6, name: "Loose Fit Hoodie", price: "$9.95", image: "/path/to/image6.jpg", colors: ["#FFF", "#000"] },
          { id: 7, name: "Regular Fit Oxford Shirt", price: "$30.00", image: "/path/to/image7.jpg", colors: ["#FFF", "#000"] },
          // ...otros productos
        ],
      };
      
      export default function ProductsList() {
        const [selectedCategory, setSelectedCategory] = useState<'bestSeller' | 'newArrivals' | 'onSale'>('bestSeller');
        const router = useRouter();
      
        const handleCardClick = (id: number) => {
          // Redirige a la página de producto con la ID específica
          router.push(`/product/${id}`);
        };
      
        
        return (
          <section className={styles.productList}>
            <div className={styles.filters}>
              {['bestSeller', 'newArrivals', 'onSale'].map(category => (
                <button 
                  key={category}
                  className={selectedCategory === category ? styles.active : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'bestSeller' ? 'Best Seller' : category === 'newArrivals' ? 'New Arrivals' : 'On Sale'}
                </button>
              ))}
            </div>
            <div className={styles.products}>
              {products[selectedCategory].map((product) => (
                <div 
                  key={product.id} 
                  className={styles.productCard} 
                  onClick={() => handleCardClick(product.id)} // Maneja el clic en la tarjeta
                >
                  <Image src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={styles.colors}>
                    {product.colors.map((color, index) => (
                      <span key={index} style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  {product.discount && product.countdown && (
                    <div className={styles.discount}>
                      <span>{product.discount}</span>
                      <span>{product.countdown}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className={styles.loadMore}>Load more</button>
          </section>
        );
      }