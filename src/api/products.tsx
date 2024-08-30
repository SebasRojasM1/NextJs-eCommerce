/*ID1*/
import id1_1 from "@/assets/img/general/products/1/id1_1.png"
import id1_2 from "@/assets/img/general/products/1/id1_2.png"
import id1_3 from "@/assets/img/general/products/1/id1_3.png"

/*ID2*/
import id2_1 from "@/assets/img/general/products/2/id2_1.png"
import id2_2 from "@/assets/img/general/products/2/id2_2.png"

/*ID3*/
import id3_1 from "@/assets/img/general/products/3/id3_1.png"
import id3_2 from "@/assets/img/general/products/3/id3_2.png"
import id3_3 from "@/assets/img/general/products/3/id3_3.png"

/*ID4*/
import id4_1 from "@/assets/img/general/products/4/id4_1.png"
import id4_2 from "@/assets/img/general/products/4/id4_2.png"
import id4_3 from "@/assets/img/general/products/4/id4_3.png"

/*ID5*/
import id5_1 from "@/assets/img/general/products/5/id5_1.png"
import id5_2 from "@/assets/img/general/products/5/id5_2.jpg"
import id5_3 from "@/assets/img/general/products/5/id5_3.jpg"

/*ID6*/
import id6_1 from "@/assets/img/general/products/6/id6_1.png"
import id6_2 from "@/assets/img/general/products/6/id6_2.png"
import id6_3 from "@/assets/img/general/products/6/id6_3.png"

/*ID7*/
import id7_1 from "@/assets/img/general/products/7/id7_1.png"
import id7_2 from "@/assets/img/general/products/7/id7_2.png"
import id7_3 from "@/assets/img/general/products/7/id7_3.png"

import { StaticImageData } from "next/image"


interface ProductProperties {
  id: number;
  name: string;
  price: string;
  image: string | StaticImageData[];
  colors: string[];
  category: string;
  discount?: string;
  countdown?: string;
}

const products: ProductProperties[] = [
  {
    id: 1,
    name: 'Ribbed Tank Top',
    price: '$16.95',
    category: "Women",
    image: [id1_1, id1_2, id1_3],
    colors: ['#000', '#FFF', '#F00'],
  },
  {
    id: 2,
    name: 'Ribbed modal T-shirt',
    price: '$18.95',
    category: "Women",
    image: [id2_1, id2_2],
    discount: '33%',
    countdown: '1d 15h 51m 37s',
    colors: ['#FFF', '#F0F', '#0F0'],
  },
  {
    id: 3,
    name: 'Oversized Printed T-shirt',
    price: '$10.00',
    category: "Women",
    image: [id3_1, id3_2, id3_3],
    colors: ['#FFF', '#000'],
  },
  {
    id: 4,
    name: 'V-neck linen T-shirt',
    price: '$14.95',
    category: "Women",
    image: [id4_1, id4_2, id4_3],
    colors: ['#F0F', '#000', '#FFF'],
  },
  {
    id: 5,
    name: 'Loose Fit Sweatshirt',
    price: '$30.00',
    category: "Men",
    image: [id5_1, id5_2, id5_3],
    colors: ['#00F', '#FFF', '#F00'],
  },
  {
    id: 6,
    name: 'Loose Fit Hoodie',
    price: '$9.95',
    category: "Men",
    image: [id6_1, id6_2, id6_3],
    colors: ['#FFF', '#000'],
  },
  {
    id: 7,
    name: 'Regular Fit Oxford Shirt',
    price: '$30.00',
    category: "Men",
    image: [id7_1, id7_2, id7_3],
    colors: ['#FFF', '#000'],
  },
];

export default products;