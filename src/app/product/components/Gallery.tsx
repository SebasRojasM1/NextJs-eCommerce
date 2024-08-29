import Image from "next/image";
import { FC } from "react";

type GalleryProps = {
    images: string;
};

const Gallery: FC<GalleryProps> = ({ images }) => {

    return (
        <div className="flex w-1/2">
            <div className="flex flex-col w-1/6 mr-2">
                {/* Aquí podrías agregar miniaturas adicionales si tienes más imágenes */}
                <Image
                    src={images}
                    alt="Thumbnail"
                    className="w-full rounded mb-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
            <div className="w-full">
                <Image src={images} alt="Main Product" />
            </div>
        </div>
    );
};

export default Gallery;
