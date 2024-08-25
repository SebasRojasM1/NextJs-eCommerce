/* import Link from "next/link";
import '@/assets/styles/Home/seasonCollections.scss';
import Image from "next/image";
import womanCollection from "@/assets/img/home/WomanCollection.png";
import menCollection from "@/assets/img/home/MenCollection.png";
import jewelryCollection from "@/assets/img/home/JewelryCollection.png";
import sneakersCollection from "@/assets/img/home/SneakersCollection.png";
import bagsCollection from "@/assets/img/home/BagCollection.png";
import glassesCollection from "@/assets/img/home/GlassesCollection.png";

const categories = [
    { name: "Women's", items: 23, image: womanCollection },
    { name: "Men's", items: 9, image: menCollection },
    { name: "Jewelry", items: 31, image: jewelryCollection },
    { name: "Sneakers", items: 21, image: sneakersCollection },
    { name: "Bags", items: 5, image: bagsCollection },
    { name: "Glasses", items: 14, image: glassesCollection },
];

export default function SeasonCollection() {
    return (
        <section className="seasonCollection">
            <div className="head-collection">
                <h2 className="title">Season Collection</h2>

                <Link href="/categories" className="viewAll">
                    View all categories ↗
                </Link>
            </div>

            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category">
                        <div className="imageWrapper">
                            <Image src={category.image} alt={`${category.name} category`} />
                        </div>
                        <h3>{category.name}</h3>
                        <p>{category.items} items</p>
                    </div>
                ))}
            </div>
        </section>
    );
} */