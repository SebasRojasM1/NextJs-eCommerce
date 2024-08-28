import '@/assets/styles/Product/gallery.scss';
import imagen1 from "@/assets/img/home/seller/bestSeller1.png"
import imagen2 from "@/assets/img/home/seller/bestSeller2.png"
import imagen3 from "@/assets/img/home/seller/bestSeller3.png"
import imagen4 from "@/assets/img/home/seller/bestSeller4.png"
import imagen5 from "@/assets/img/home/seller/bestSeller5.png"
import Image from "next/image";

export default function Gallery() {

    return (
        <div className="imageGallery">
            <div className="thumbnailGallery">
                <Image src={imagen2} alt="Thumbnail 1" />
                <Image src={imagen3} alt="Thumbnail 2" />
                <Image src={imagen4} alt="Thumbnail 3" />
                <Image src={imagen5} alt="Thumbnail 4" />
            </div>

            <div className="main-gallery">
                <Image src={imagen1} alt="Main Product" />
            </div>
        </div>
    )
} 