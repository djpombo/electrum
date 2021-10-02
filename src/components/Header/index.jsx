import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaDollarSign, FaUser, FaBolt, FaHeart, FaShoppingCart } from 'react-icons/fa';


const Header = () =>{
    return(
        <header className="header">
            <div className="header-top">
                <div className="header-top-container">
                    <div className="store-info-container">
                        <span><i className="fas fa-phone" ><FaPhone /></i>(51) 982098544</span>
                        <span><i className="fas fa-envelope"><FaEnvelope /></i>electrum@pixeloko.com</span>
                        <span><i className="fas fa-map-marker-alt"><FaMapMarkedAlt /></i>Av Pedro Adams Filho, 1451, Novo Hamburgo/RS</span>
                    </div>
                    <div className="header-user-top-menu">
                        <span><i className="fas fa-dollar-sign"><FaDollarSign /></i><a href="#">BRL</a></span>
                        <span><i className="fas fa-user"><FaUser /></i><a href="#">Minha Conta</a></span>
                    </div>
                </div>
            </div>

            <div className="main-header">
                <div className="main-header-container">
                    <a href="#" id="brand">Electrum<i className="fas fa-bolt" id="main-icon"><FaBolt size={28} /></i></a>
                    <form action="" id="search-form">
                        <input type="text" id="search" placeholder="busque aqui" />
                        <input type="submit" className="btn btn-half" value="Pesquisar" />
                    </form>
                    <div className="header-actions-menu">
                        <div className="whishlist-container">
                            <span className="qtd">0</span>
                            <i className="fas fa-heart"><FaHeart /></i>
                            <a href="#">Favoritos</a>
                        </div>

                        <div className="header-cart-container">
                            <span className="qtd">0</span>
                            <i className="fas fa-shopping-cart"><FaShoppingCart /></i>
                            <a href="#">Carrinho</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Promoções</a>
                        </li>
                        <li>
                            <a href="#">Notebooks</a>
                        </li>
                        <li>
                            <a href="#">Celulares</a>
                        </li>
                        <li>
                            <a href="#">Cameras</a>
                        </li>
                        <li>
                            <a href="#">Acessorios</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
