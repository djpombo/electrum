import {  FaStar, FaRegStar } from 'react-icons/fa';
import Prod1 from '../../img/prod-1.jpg';
import Prod2 from '../../img/prod-2.jpg';
import Prod3 from '../../img/prod-3.jpg';
import Prod4 from '../../img/prod-4.jpg';


const Novidades = () => {

    return (
        <div className="products-grid">
            <h2>Novidades</h2>
            <div className="products-grid-container">
                <div className="product-grid-card">
                    <span className="label new">New</span>
                    <img src={Prod1} alt="monitor gamer" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Monitor Gamer 4K</h3>
                    <p className="product-price">R$ 2.899,90</p>
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
                    <span className="label new">New</span>
                    <img src={Prod2} alt="Microfone youtuber" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Microfone Pro</h3>
                    <p className="product-price">R$ 499,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>

                <div className="product-grid-card">
                    <span className="label new">New</span>
                    <img src={Prod3} alt="Smart TV" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smart TV 55" 8k Oled</h3>
                    <p className="product-price">R$ 9.899,90</p>
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
                    <span className="label new">New</span>
                    <img src={Prod4} alt="PC Gamer" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">PC Gamer core i7</h3>
                    <p className="product-price">R$ 7.429,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>
            </div>
        </div>
    )

}
export default Novidades;