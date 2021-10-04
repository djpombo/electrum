import {  FaStar, FaRegStar } from 'react-icons/fa';
import { useEffect } from 'react';
import Prod7 from '../../img/prod-7.jpg';
import Prod8 from '../../img/note-5.png';
import Prod9 from '../../img/note-3.png';
import Prod10 from '../../img/note-4.png';



const Notebooks = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="products-grid">
            <h2>Notebooks</h2>
            <div className="products-grid-container">
                <div className="product-grid-card">
                    
                    <img src={Prod7} alt="monitor Asus I3" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Notebook Asus i3</h3>
                    <p className="product-price">R$ 2.899,90</p>
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
                    
                    <img src={Prod8} alt="Notebook HP Rysen 5" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Notebook HP Rysen 5</h3>
                    <p className="product-price">R$ 5.499,90</p>
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
                    
                    <img src={Prod9} alt="Macbook Pro i5" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Macbook Pro i5</h3>
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
                    
                    <img src={Prod10} alt="Notebook Samsung" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Notebook Samsung Dual Core</h3>
                    <p className="product-price">R$ 1.429,90</p>
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
export default Notebooks;