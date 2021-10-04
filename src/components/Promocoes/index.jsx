import { FaStar, FaRegStar } from 'react-icons/fa';
import Prod5 from '../../img/prod-5.jpg';
import Prod6 from '../../img/prod-6.jpg';
import Prod7 from '../../img/prod-7.jpg';
import Prod8 from '../../img/prod-8.jpg';


const Promocoes = () => {

    return (
        <div className="products-grid">
            <h2>Promoções</h2>
            <div className="products-grid-container">
                <div className="product-grid-card">
                    <span className="label hot">Hot</span>
                    <img src={Prod5} alt="joystick xbox" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Joypad Xbox One S</h3>
                    <p className="product-price">R$ 649,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>

                <div className="product-grid-card">
                    <span className="label hot">Hot</span>
                    <img src={Prod6} alt="samartphone galaxy" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smartphone Samasung Galaxy s21</h3>
                    <p className="product-price">R$ 5.499,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>

                <div className="product-grid-card">
                    <span className="label hot">Hot</span>
                    <img src={Prod7} alt="notebook" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Notebook core i3 15"</h3>
                    <p className="product-price">R$ 3.799,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>

                <div className="product-grid-card">
                    <span className="label hot">Hot</span>
                    <img src={Prod8} alt="Mouse gamer" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Mouser Gamer T3</h3>
                    <p className="product-price">R$ 299,49</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>
            </div>
        </div>
    )
}
export default Promocoes;
