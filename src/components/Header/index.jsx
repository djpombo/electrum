import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaDollarSign, FaUser, FaBolt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                        <span><i className="fas fa-dollar-sign"><FaDollarSign /></i><Link to ='/'>BRL</Link></span>
                        <span><i className="fas fa-user"><FaUser /></i><Link to ='/'>Minha Conta</Link></span>
                    </div>
                </div>
            </div>

            <div className="main-header">
                <div className="main-header-container">
                    <Link to ='/' id="brand">Electrum<i className="fas fa-bolt" id="main-icon"><FaBolt size={28} /></i></Link>
                    <form action="" id="search-form">
                        <input type="text" id="search" placeholder="busque aqui" />
                        <input type="submit" className="btn btn-half" value="Pesquisar" />
                    </form>
                    <div className="header-actions-menu">
                        <div className="whishlist-container">
                            <span className="qtd">0</span>
                            <i className="fas fa-heart"><FaHeart /></i>
                            <Link to ='/'>Favoritos</Link>
                        </div>

                        <div className="header-cart-container">
                            <span className="qtd">0</span>
                            <i className="fas fa-shopping-cart"><FaShoppingCart /></i>
                            <Link to ='/'>Carrinho</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <nav>
                    <ul>
                        <li>
                            <Link to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link to ='/'>Promoções</Link>
                        </li>
                        <li>
                            <Link to ='/'>Notebooks</Link>
                        </li>
                        <li>
                            <Link to ='/'>Celulares</Link>
                        </li>
                        <li>
                            <Link to ='/'>Cameras</Link>
                        </li>
                        <li>
                            <Link to ='/'>Acessorios</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
