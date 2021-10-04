import {  FaStar, FaRegStar } from 'react-icons/fa';
import Prod15 from '../../img/acess-1.jpg';
import Prod16 from '../../img/acess-2.jpg';
import Prod17 from '../../img/acess-3.jpg';
import Prod18 from '../../img/acess-4.jpg';



const Acessorios = () => {

    return (
        <div className="products-grid">
            <h2>Acessorios</h2>
            <div className="products-grid-container">
                <div className="product-grid-card">
                    
                    <img src={Prod15} alt="Teclado Gamer" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Teclado Gamer Evolut Hawke</h3>
                    <p className="product-price">R$ 69,90</p>
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
                    
                    <img src={Prod16} alt="Mochila para Notebook Gamer Dell" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Mochila para Notebook Gamer Dell</h3>
                    <p className="product-price">R$ 499,90</p>
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
                    
                    <img src={Prod17} alt="Speaker Philco" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Speaker Philco PBS40BT Extreme</h3>
                    <p className="product-price">R$ 299,90</p>
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
                    
                    <img src={Prod18} alt="Mouse Sem Fio" />
                    <p className="category">Categoria</p>
                    <h3 className="product-name">Mouse Sem Fio Gamer Logitech G PRO</h3>
                    <p className="product-price">R$ 829,90</p>
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
export default Acessorios;