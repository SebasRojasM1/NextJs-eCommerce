import image1 from "@/assets/img/home/seller/bestSeller1.png"
import image2 from "@/assets/img/home/seller/bestSeller2.png"
import image3 from "@/assets/img/home/seller/bestSeller3.png"
import image4 from "@/assets/img/home/seller/bestSeller4.png"
import image5 from "@/assets/img/home/seller/bestSeller5.png"
import image6 from "@/assets/img/home/seller/bestSeller6.png"
import image7 from "@/assets/img/home/seller/bestSeller7.png"
import { StaticImageData } from "next/image"


interface ProductProperties {
  id: number;
  name: string;
  price: string;
  image: string | StaticImageData;
  colors: string[];
  discount?: string;
  countdown?: string;
}

const products: ProductProperties[] = [
  {
    id: 1,
    name: 'Ribbed Tank Top',
    price: '$16.95',
    image: image1,
    colors: ['#000', '#FFF', '#F00'],
  },
  {
    id: 2,
    name: 'Ribbed modal T-shirt',
    price: '$18.95',
    image: image2,
    discount: '33%',
    countdown: '1d 15h 51m 37s',
    colors: ['#FFF', '#F0F', '#0F0'],
  },
  {
    id: 3,
    name: 'Oversized Printed T-shirt',
    price: '$10.00',
    image: image3,
    colors: ['#FFF', '#000'],
  },
  {
    id: 4,
    name: 'V-neck linen T-shirt',
    price: '$14.95',
    image: image4,
    colors: ['#F0F', '#000', '#FFF'],
  },
  {
    id: 5,
    name: 'Loose Fit Sweatshirt',
    price: '$30.00',
    image: image5,
    colors: ['#00F', '#FFF', '#F00'],
  },
  {
    id: 6,
    name: 'Loose Fit Hoodie',
    price: '$9.95',
    image: image6,
    colors: ['#FFF', '#000'],
  },
  {
    id: 7,
    name: 'Regular Fit Oxford Shirt',
    price: '$30.00',
    image: image7,
    colors: ['#FFF', '#000'],
  },
];

export default products;