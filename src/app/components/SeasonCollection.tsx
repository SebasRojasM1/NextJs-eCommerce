import Link from "next/link";
import '@/assets/styles/Home/seasonCollections.scss';
import Image from "next/image";

const categories = [
    { name: "Women's", items: 23, image: "" },
    { name: "Men's", items: 9, image: "" },
    { name: "Jewelry", items: 31, image: "" },
    { name: "Sneakers", items: 21, image: "" },
    { name: "Bags", items: 5, image: "" },
    { name: "Glasses", items: 14, image: "" },
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
}