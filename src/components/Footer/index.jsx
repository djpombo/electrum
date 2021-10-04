import { FaLocationArrow, FaPhone, FaEnvelope, FaCcMastercard, FaCcVisa, FaCcDinersClub, FaCcAmazonPay, FaCcApplePay, FaRegCopyright } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-top-about">
                        <h3>Sobre nós</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Deserunt, maxime nostrum officia
                            magni repellendus perferendis
                            laboriosam labore cumque, obcaecati
                            aliquam velit vero. Iure aut est
                            doloremque at officia! Quia, eum.
                        </p>
                        
                        <div className="footer-top-about-icons">
                        
                        <FaLocationArrow />
                        <Link to ='/'>Rua Pedro Adams Filho, 1451, Novo Hamburgo/RS</Link>

                        <i className="fas fa-phone">
                            
                        </i>
                        <FaPhone /><Link to ="/">(51) 982098544</Link>

                        <i className="far fa-envelope">
                            
                        </i>
                        <FaEnvelope /><Link to="/">electrum@pixeloko.com</Link>
                        </div>
                    </div>
                    <div className="footer-top-categories">
                        <h3>Categorias</h3>
                        <ul>
                            <li>
                                <Link to = '/promocoes'>Promoções</Link>
                            </li>
                            <li>
                                <Link to = '/novidades'>Novidades</Link>
                            </li>
                            <li>
                                <Link to = '/notebooks'>Notebooks</Link>
                            </li>
                            <li>
                                <Link to = '/smartphones'>Smatphones</Link>
                            </li>
                            <li>
                                <Link to = '/acessorios'>Acessorios</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-top-information">
                        <h3>Informações</h3>
                        <ul>
                            <li>
                                <Link to="">Sobre nós</Link>
                            </li>
                            <li>
                                <Link to="/">Entre em contato</Link>
                            </li>
                            <li>
                                <Link to="/">Política de privacidade</Link>
                            </li>
                            <li>
                                <Link to="/">Pedidos e devoluções</Link>
                            </li>
                            <li>
                                <Link to="/">Termos e Condições</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-top-menu">
                        <h3>Menu</h3>
                        <ul>
                            <li>
                                <Link to="/">Minha Conta</Link>
                            </li>
                            <li>
                                <Link to="/">Carrinho</Link>
                            </li>
                            <li>
                                <Link to="/">Lista de Desejos</Link>
                            </li>
                            <li>
                                <Link to="/">Rastrear Pedido</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-payments">
                        <i className="fab fa-cc-mastercard" >
                            <FaCcMastercard size={42}/>
                        </i>
                        <i className="fab fa-cc-visa">
                            <FaCcVisa size={42}/>
                        </i>
                        <i className="fab fa-cc-dinners-club">
                            <FaCcDinersClub size={42}/>
                        </i>
                        <i className="fab fa-cc-amazon-pay">
                            <FaCcAmazonPay size={42}/>
                        </i>
                        <i className="fab fa-cc-apple-pay">
                            <FaCcApplePay size={42}/>
                        </i>
                    </div>
                    <p><i><FaRegCopyright /></i>Copyright 2021 - Electrum by Thuiskon Kerber</p>
                </div>

            </footer>

        </>
    )
}
export default Footer;