import {  FaStar, FaRegStar } from 'react-icons/fa';
import { useEffect } from 'react';
import Prod11 from '../../img/smart-6.jpg';
import Prod12 from '../../img/smart-3.jpg';
import Prod13 from '../../img/smart-4.jpg';
import Prod14 from '../../img/smart-5.jpg';



const Smartphones = () => {

    //usando este hook para os links do rodapé subir a pagina
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="products-grid">
            <h2>Celulares e Smartphones</h2>
            <div className="products-grid-container">
                <div className="product-grid-card">
                    
                    <img src={Prod11} alt="Smartphone Moto E7" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smartphone Moto E7 Plus 64GB</h3>
                    <p className="product-price">R$ 1.399,90</p>
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
                    
                    <img src={Prod12} alt="Smartphone Galaxy A72 128Gb" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smartphone Galaxy A72 128Gb</h3>
                    <p className="product-price">R$ 2.499,90</p>
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
                    
                    <img src={Prod13} alt="Smartphone Multilaser" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smartphone Multilaser E 32gb</h3>
                    <p className="product-price">R$ 399,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>

                <div className="product-grid-card">
                    
                    <img src={Prod14} alt="Smartphone Motorola" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Smartphone Motorola Moto E6S 32GB</h3>
                    <p className="product-price">R$ 829,90</p>
                    <div className="rating-box">
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                        <i className="fas fa-star"><FaRegStar /></i>
                    </div>
                    <button className="btn">Comprar</button>
                </div>
            </div>
        </div>
    )

}
export default Smartphones;