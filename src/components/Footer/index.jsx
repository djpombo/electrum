import { FaLocationArrow, FaPhone, FaEnvelope, FaCcMastercard, FaCcVisa, FaCcDinersClub, FaCcAmazonPay, FaCcApplePay, FaRegCopyright } from 'react-icons/fa'


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
                        <i className="fas fa-location-arrow">
                            <FaLocationArrow />
                        </i>
                        <a href="#">Rua Pedro Adams Filho, 1451, Novo Hamburgo/RS</a>

                        <i className="fas fa-phone">
                            <FaPhone />
                        </i>
                        <a href="#">(51) 982098544)</a>

                        <i className="far fa-envelope">
                            <FaEnvelope />
                        </i>
                        <a href="#">electrum@pixeloko.com</a>

                    </div>
                    <div className="footer-top-categories">
                        <h3>Categorias</h3>
                        <ul>
                            <li>
                                <a href="#">Promoções</a>
                            </li>
                            <li>
                                <a href="#">Headsets</a>
                            </li>
                            <li>
                                <a href="#">PC Gamer</a>
                            </li>
                            <li>
                                <a href="#">Cameras</a>
                            </li>
                            <li>
                                <a href="#">Mouse e Teclado</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-top-information">
                        <h3>Informações</h3>
                        <ul>
                            <li>
                                <a href="#">Sobre nós</a>
                            </li>
                            <li>
                                <a href="#">Entre em contato</a>
                            </li>
                            <li>
                                <a href="#">Política de privacidade</a>
                            </li>
                            <li>
                                <a href="#">Pedidos e devoluções</a>
                            </li>
                            <li>
                                <a href="#">Termos e Condições</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-top-menu">
                        <h3>Menu</h3>
                        <ul>
                            <li>
                                <a href="#">Minha Conta</a>
                            </li>
                            <li>
                                <a href="#">Carrinho</a>
                            </li>
                            <li>
                                <a href="#">Lista de Desejos</a>
                            </li>
                            <li>
                                <a href="#">Rastrear Pedido</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-payments">
                        <i className="fab fa-cc-mastercard">
                            <FaCcMastercard />
                        </i>
                        <i className="fab fa-cc-visa">
                            <FaCcVisa />
                        </i>
                        <i className="fab fa-cc-dinners-club">
                            <FaCcDinersClub />
                        </i>
                        <i className="fab fa-cc-amazon-pay">
                            <FaCcAmazonPay />
                        </i>
                        <i className="fab fa-cc-apple-pay">
                            <FaCcApplePay />
                        </i>
                    </div>
                    <p><i><FaRegCopyright /></i>Copyright 2021 - Electrum by Thuiskon Kerber</p>
                </div>

            </footer>

        </>
    )
}
export default Footer;