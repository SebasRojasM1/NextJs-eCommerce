import '@/assets/styles/Product/infoProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';


export default function InfoProduct() {

    return (
        <>
            <h1 className="productTitle">Cotton jersey top</h1>
            
            <div className="sellerInfo">
                <p className="bestSeller">Best seller</p>
                <p className="stockInfo"><span><FontAwesomeIcon icon={faBolt} /></span>Selling fast! 56 people have this in their carts.</p>
            </div>
            
            <p className="price">
                <span className="currentPrice">$8.00</span>
                <span className="originalPrice">$10.00</span>
                <span className="discount">20% OFF</span>
            </p>

            <p className="peopleViewing"><span>20</span> People are viewing this right now</p>
            
            <div className="saleEnd">
                <p>HURRY UP! SALE ENDS IN:</p>
                <p className="timer">11 Days : 15 Hours : 51 Mins : 32 Secs</p>
            </div>
        </>
    )
} 